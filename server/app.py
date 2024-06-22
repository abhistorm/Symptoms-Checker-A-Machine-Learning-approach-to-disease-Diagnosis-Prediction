from flask import Flask,request,jsonify
from flask_cors import CORS,cross_origin
import joblib
import numpy as np 


app = Flask(__name__)
cors = CORS(app,resources={r"/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = "Content-Type"

@app.route('/',methods=['GET'])
@cross_origin()
def home():
    return "API is working"

# Define a route for mesothelioma prediction
@app.route('/predict/mesothelioma',methods=['POST'])
@cross_origin()
def predictMesothelioma():
    # return "API is working"
    model = joblib.load('./models/mesothelioma')
    data = request.get_json(force=True)
    data = np.array(data).reshape(1,-1)
    prediction = model.predict(data)
    return jsonify({"prediction":int(prediction[0])})
    print(prediction[0])

# Define a route for chronic kidney disease prediction
@app.route('/predict/chronickidneydisease',methods=['POST'])
@cross_origin()
def predictCKD():
    model = joblib.load('./models/chronic-kidney-disease')
    data = request.get_json(force=True)
    data = np.array(data).reshape(1,-1)
    prediction = model.predict(data)
    return jsonify({"prediction":int(prediction[0])})

# Define a route for coronary heart disease prediction
@app.route('/predict/coronaryheartdisease',methods=['POST'])
@cross_origin()
def predictCHD():
    model = joblib.load('./models/coronary_heart_disease')
    data = request.get_json(force=True)
    data = np.array(data).reshape(1,-1)
    prediction = model.predict(data)
    return jsonify({"prediction":int(prediction[0])})

# Define a route for chronic kidney disease prediction
@app.route('/predict/diabetesmelitus',methods=['POST'])
@cross_origin()
def predictDM():
    scaler = joblib.load('./models/Diabetes_scaler')
    model = joblib.load('./models/Diabetes-Melitus')
    data = request.get_json(force=True)
    data = np.array(data).reshape(1,-1)
    prediction = model.predict(scaler.transform(data))
    return jsonify({"prediction":int(prediction[0])})

# Define a route for liver cirrhosis disease prediction
@app.route('/predict/livercirrhosis',methods=['POST'])
@cross_origin()
def predictLiverCirrhosis():
    model = joblib.load('./models/Liver-Cirrhosis')
    data = request.get_json(force=True)
    data = np.array(data).reshape(1,-1)
    prediction = model.predict(data)
    return jsonify({"prediction":int(prediction[0])})

# Run the app
if __name__ == '__main__':
    app.run()

# how to run this and where to check for the link