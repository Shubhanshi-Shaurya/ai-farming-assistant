import tensorflow as tf
from PIL import Image
import numpy as np
from tensorflow.keras.applications.resnet50 import preprocess_input

# unloading models 
cattle_model=tf.keras.models.load_models('\models\cattle_classifier.keras')

def cattle_predict(image):
    image=image.convert('RGB')
    image=image.resize((224,224))
    img=np.array(image,dtype=np.float32)
    img=np.expand_dims(img,axis=0)

    predictions=cattle_model.predict(img,verbose=0)[0]




