#  AI Farming Assistant

An AI-powered farming assistant that helps farmers make better agricultural decisions through **crop recommendation, yield prediction, and weather-based insights**.

---

##  Features

*  **Crop Recommendation** – Recommends suitable crops based on agricultural conditions
*  **Yield Prediction** – Predicts expected crop yield using machine learning
*  **Cattle Classifier** – Classifies the cattle breed from image
*  **Plant Disease Classifier** – Identifies plant disease from image
*  **Weather Information** – Provides weather data for better farming decisions
*  **Location-Based Data** – Supports location-based agricultural information
*  **AI-Powered Insights** – Uses machine learning to assist farmers
*  **Responsive Interface** – Simple and user-friendly web application

---

##  Tech Stack

### Frontend

* **React.js**
* **JavaScript**
* **HTML5**
* **CSS3**

### Backend

* **Python**
* **Flask**
* **REST API**

### Machine Learning

* **XGBoost**
* **Scikit-learn**
* **Pandas**
* **NumPy**
* **CNN Models**

### APIs

* **Weather API**

---

##  Project Structure

```text
AI-Farming-Assistant/
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── run.py
|   ├── app/
|   |   ├── models/
│   |   ├── services/
|   |   └── routes.py
|   |
│   └── requirements.txt
|
├── .gitignore
├── LICENSE
└── README.md
```

---

##  Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Shubhanshi-Shaurya/ai-farming-assistant
cd AI-Farming-Assistant
```

### 2. Start the Backend

```bash
cd backend
pip install -r requirements.txt
python run.py
```

### 3. Start the Frontend

```bash
cd frontend
npm install
npm run dev
```

The application will be available at the local URL provided by React/Vite.

##  Machine Learning

The system uses machine learning models for:

* **Crop Recommendation**
* **Crop Yield Prediction**

The models use agricultural parameters such as soil properties, weather conditions, crop information, and other relevant inputs to generate recommendations and predictions.

---

##  Deep Learning

The system uses deep learning models for:

* **Plant Disease Classifier**
* **Cattle Classifier**

The Pretrained deep learning models such as **RESNET-50** and **MOBILENETV** are used by implementing transfer learning technique and trained on specific data sets to generate predictions

---

##  Our AI Agent - 🤖 Krishi 

* A dedicated AI Assistant for farmers to help out with their farming and cattle related queries
* Build using **Langchain** and powered by **Groq API** , it provides a chat interface  to communicate your queries with the AI Agent

---

##  Future Improvements

*  Automatic soil data retrieval
*  Real-time weather integration
*  GPS-based recommendations
*  Deployment on cloud platforms

---


