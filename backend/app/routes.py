from flask import Flask,request, jsonify,Blueprint
from flask_cors import CORS
import tensorflow as tf
from PIL import Image,ImageOps
import numpy as np
from tensorflow.keras.applications.resnet50 import preprocess_input
import requests
import os
from app.data.breeds import BREED_INFO
import joblib

# flask engine blueprint
main_routes = Blueprint(
    "main_routes",
    __name__
)

# CROP RECOMMENDER MODEL 
CROP_RECOMMENDER_MODEL=joblib.load("app/models/crop_recommender.pkl")
ENCODER=joblib.load("app/models/crop_label_encoder.pkl")
PREPROCESSOR=joblib.load("app/models/crop_yield_preprocessor.pkl")
CROP_YIELD_MODEL=joblib.load("app/models/crop_yield_xgboost.pkl")



#CATTLE CLASSIFIER MODEL
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

cattle_model = tf.keras.models.load_model(
    os.path.join(BASE_DIR, "models", "cattle_classifier.keras")
)

with open("app/data/breed_classes.txt", "r") as f:
    cattle_names = [line.strip() for line in f]

def get_wikipedia_info(breed_name):
    search_names = [
        f"{breed_name.replace('_',' ')} cattle",
        f"{breed_name.replace('_',' ')} buffalo",
        breed_name.replace("_"," ")
    ]

    for name in search_names:
        url = f"https://en.wikipedia.org/api/rest_v1/page/summary/{name.replace(' ','_')}"

        try:
            response = requests.get(url, timeout=5)
            if response.status_code == 200:
                data = response.json()
                return {
                    "summary": data.get("extract", ""),
                    "image": data.get("thumbnail", {}).get("source", ""),
                    "wiki": data.get("content_urls", {})
                                .get("desktop", {})
                                .get("page", "")
                }

        except Exception as e:
            print(f"exception {e}")

    return {
        "summary": "",
        "image": "",
        "wiki": ""
    }

def cattle_predict(image):
    image=image.convert('RGB')
    image=image.resize((224,224))
    img=np.array(image,dtype=np.float32)
    img=np.expand_dims(img,axis=0)

    predictions=cattle_model.predict(img,verbose=0)[0]
    class_index = np.argmax(predictions)

    predicted_breed = cattle_names[class_index]
    confidence = float(predictions[class_index])

    return predicted_breed, confidence


# PLANT DISEASE CLASSIFIER
MODEL_PATH = os.path.join(os.path.dirname(__file__), 'models', 'disease_classifier.h5')
plant_model = tf.keras.models.load_model(MODEL_PATH)

def load_class_labels():
    labels_file = "data/plant_classes.txt"
    if os.path.exists(labels_file):
        with open(labels_file, "r") as f:
            return [line.strip() for line in f.readlines() if line.strip()]
    else:
        print("file not found")
        return []

plant_names = load_class_labels()

def plant_predict(image):
    image=image.convert('RGB')
    image=image.resize((224,224))
    img=np.array(image,dtype=np.float32)
    img=np.expand_dims(img,axis=0)

    predictions = plant_model.predict(img)
    highest_index = np.argmax(predictions[0])
    confidence = predictions[0][highest_index]
    
    return plant_names[highest_index], confidence


# ROUTES 
# cattle predictor route
@main_routes.route("/cattle_predict",methods=["POST"])
def cattle_predict_api():
    if "image" not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    file=request.files["image"]
    image=Image.open(file)

    predicted_breed,confidence=cattle_predict(image)
    local_info=BREED_INFO.get(predicted_breed,{})
    wiki_info=get_wikipedia_info(predicted_breed)

    return jsonify({
        "breed":predicted_breed,
        "confidence":round(confidence*100,2),
        "details":{
            "origin":
            local_info.get("origin","Not Available"),
            "purpose":
                local_info.get("purpose","Not Available"),
            "milkYield":
                local_info.get("milkYield","Not Available"),
            "color":
                local_info.get("color","Not Available"),
            "description":
                local_info.get("description",wiki_info["summary"]), 
            "wikiSummary":
                wiki_info.get("summary"),
            "image":
                wiki_info.get("image"),
            "wikipedia":
                wiki_info["wiki"]
        }
    })


# plant disease predictor route
@main_routes.route("/disease_predict",methods=["POST"])
def disease_predict():
    if "image" not in request.files:
            return jsonify({"error": "No image uploaded"}), 400
    
    file=request.files["image"]
    image=Image.open(file)
    
    predicted_disease,confidence=plant_predict(image)

    return jsonify({
        "disease":predicted_disease,
        "confidence":round(confidence*100,2)
    })

@main_routes.route("/crop_recommend",methods=['POST'])
def crop_recommend():
    pass
