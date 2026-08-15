import joblib
import pandas as pd

preprocessor=joblib.load("app/models/crop_yield_preprocessor.pkl")
model=joblib.load("app/models/crop_yield_xgboost.pkl")

def predict_yield(data):
    df=pd.DataFrame([data])

    X=preprocessor.transform(df)

    prediction=model.predict(X)

    return float(prediction[0])
