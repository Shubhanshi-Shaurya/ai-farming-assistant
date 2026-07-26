from flask import Flask,request, jsonify,Blueprint
from flask_cors import CORS
import tensorflow as tf
from PIL import Image
import numpy as np
from tensorflow.keras.applications.resnet50 import preprocess_input
import requests
import os
from data.breeds import BREED_INFO

# flask engine blueprint
app = Blueprint('main_routes', __name__)

#CATTLE CLASSIFIER MODEL
cattle_model=tf.keras.models.load_models('\models\cattle_classifier.keras')

with open("data/breed_classes.txt", "r") as f:
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
plant_model=tf.keras.models.load_models('\models\disease_classifier.h5')

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

