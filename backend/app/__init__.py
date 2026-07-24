import os
from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
from flask_sqlalchemy import SQLAlchemy


def create_app():
    app=Flask(__name__)
    CORS(app)


    return app