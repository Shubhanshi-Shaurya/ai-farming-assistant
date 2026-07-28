# import sys
# import os

# sys.path.append(os.path.dirname(os.path.abspath(__file__)))

# from app import create_app

# app = create_app()

# if __name__ == '__main__':
#     app.run(host='0.0.0.0', port=5000, debug=True)

from flask import Flask
from flask_cors import CORS

from app.routes import main_routes


app = Flask(__name__)

CORS(app)


app.register_blueprint(main_routes)


if __name__ == "__main__":
    app.run(debug=True)