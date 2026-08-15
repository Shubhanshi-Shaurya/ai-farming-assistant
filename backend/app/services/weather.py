import requests
import os 

OPEN_WEATHER_API=os.getenv("OPEN_WEATHER_API_KEY")

def fetch_weather(lat,lon):
    url=""
    params={
        "lat":lat,
        "lon":lon,
        "appid":OPEN_WEATHER_API,
        "units":"metric"
    }
    response=requests.get(url,params=params)
    response.raise_for_status()

    data=response.json()

    return{
        "avg_temp_c":data["main"]["temp"],
        "avg_humidity":data["main"]["humidity"]
    }
