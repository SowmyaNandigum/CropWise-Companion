from flask import Flask, request, render_template
import numpy as np
import pandas
import sklearn
import pickle

# importing model
model = pickle.load(open('model.pkl', 'rb'))
sc = pickle.load(open('standsca'
                      ''
                      ''
                      ''
                      ''
                      ''
                      ''
                      'ler.pkl', 'rb'))
ms = pickle.load(open('minmaxscaler.pkl', 'rb'))

# creating flask app
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route("/predict", methods=['POST'])
def predict():
    N = request.form['Nitrogen']
    P = request.form['Phosporus']
    K = request.form['Potassium']
    temp = request.form['Temperature']
    humidity = request.form['Humidity']
    ph = request.form['Ph']
    rainfall = request.form['Rainfall']

    feature_list = [N, P, K, temp, humidity, ph, rainfall]
    single_pred = np.array(feature_list).reshape(1, -1)

    scaled_features = ms.transform(single_pred)
    final_features = sc.transform(scaled_features)
    prediction = model.predict(final_features)

    # crop_dict = {1: "Rice Urea Need more water", 2: "Maize", 3: "Jute", 4: "Cotton", 5: "Coconut", 6: "Papaya", 7: ["Orange"," Fertilizer : Urea", " Caution : Need more water"],
    #              8: "Apple", 9: "Muskmelon", 10: "Watermelon", 11: "Grapes", 12: "Mango", 13: "Banana",
    #              14: "Pomegranate", 15: "Lentil", 16: "Blackgram", 17: "Mungbean", 18: "Mothbeans",
    #              19: "Pigeonpeas", 20: "Kidneybeans", 21: "Chickpea", 22: "Coffee"}
    crop_dict = {
1: ["Rice","Fertilizer: Urea (N), DAP (P), MOP (K) - NPK: 120-80-40", "Caution: Avoid excessive nitrogen application, leading to lodging."],
2: ["Maize","Fertilizer: Urea (N), DAP (P), MOP (K) - NPK: 150-100-60", "Caution: Monitor soil moisture to prevent nitrogen leaching."],
3: ["Jute","Fertilizer: Urea (N), SSP (P), MOP (K) - NPK: 80-60-40", "Caution: Maintain adequate soil moisture for optimal growth."],
4: ["Cotton","Fertilizer: Urea (N), DAP (P), MOP (K) - NPK: 120-80-60", "Caution: Avoid excessive nitrogen, promoting vegetative growth over fruiting."],
5: ["Coconut","Fertilizer: Urea (N), DAP (P), MOP (K) - NPK: 100-50-100", "Caution: Maintain adequate magnesium levels for optimal growth."],
6: ["Papaya","Fertilizer: Urea (N), DAP (P), MOP (K) - NPK: 150-100-150", "Caution: Ensure balanced fertilization for optimal fruit production."],
7: ["Orange","Fertilizer: Urea (N), DAP (P), MOP (K) - NPK: 100-50-100", "Caution: Monitor pH levels, as citrus prefers slightly acidic soils."],
8: ["Apple","Fertilizer: Urea (N), DAP (P), MOP (K) - NPK: 80-50-80", "Caution: Maintain adequate potassium levels for fruit quality."],
9: ["Muskmelon","Fertilizer: Urea (N), DAP (P), MOP (K) - NPK: 100-50-100", "Caution: Avoid excessive nitrogen, promoting disease susceptibility."],
10: ["Watermelon","Fertilizer: Urea (N), DAP (P), MOP (K) - NPK: 120-60-120", "Caution: Ensure adequate moisture and potassium for optimal fruit size."],
11: ["Grapes","Fertilizer: Urea (N), DAP (P), MOP (K) - NPK: 80-50-120", "Caution: Monitor boron levels, essential for fruit set and quality."],
12: ["Mango","Fertilizer: Urea (N), DAP (P), MOP (K) - NPK: 100-50-100", "Caution: Avoid excessive nitrogen, promoting vegetative growth."],
13: ["Banana","Fertilizer: Urea (N), DAP (P), MOP (K) - NPK: 150-100-150", "Caution: Ensure adequate potassium for fruit production."],
14: ["Pomegranate","Fertilizer: Urea (N), DAP (P), MOP (K) - NPK: 80-50-80", "Caution: Maintain slightly acidic soils and adequate zinc levels."],
15: ["Lentil","Fertilizer: Urea (N), DAP (P), MOP (K) - NPK: 20-60-20", "Caution: Ensure adequate phosphorus for root development."],
16: ["Blackgram","Fertilizer: Urea (N), DAP (P), MOP (K) - NPK: 20-40-20", "Caution: Maintain adequate moisture for optimal germination."],
17: ["Mungbean","Fertilizer: Urea (N), DAP (P), MOP (K) - NPK: 20-40-20", "Caution: Monitor soil temperature for optimal germination."],
18: ["Mothbeans","Fertilizer: Urea (N), DAP (P), MOP (K) - NPK: 20-40-20", "Caution: Ensure adequate soil aeration."],
19: ["Pigeonpeas","Fertilizer: Urea (N), DAP (P), MOP (K) - NPK: 20-60-20", "Caution: Maintain adequate phosphorus for root development."],
20: ["Kidneybeans","Fertilizer: Urea (N), DAP (P), MOP (K) - NPK: 20-40-20", "Caution: Monitor soil temperature for optimal germination."],
21: ["Chickpea","Fertilizer: Urea (N), DAP (P), MOP (K) - NPK: 20-40-20", "Caution: Ensure adequate phosphorus for root development and monitor soil moisture to prevent drought stress."],
22: ["Coffee","Fertilizer: Urea (N), DAP (P), MOP (K) - NPK: 100-50-100", "Caution: Maintain adequate magnesium levels for optimal growth and monitor soil pH levels, ideal range 5.5-6.5."]}
    # if prediction[0] in crop_dict and prediction[1] in crop_dict:
    #     crop = crop_dict[prediction[0]]
    #     fertilizer=crop_dict[prediction[1]]
    #     result = "{} is the best crop to be cultivated right there".format(crop)
    #     result="{} is the best Fertilizer to be cultivated right there".format(fertilizer)

    # else:
    #     result = "Sorry, we could not determine the best crop to be cultivated with the provided data."
    # return render_template('index.html', result=result)
    if prediction[0] in crop_dict:
        crop = crop_dict[prediction[0]][0]
        fertilizer = crop_dict[prediction[0]][1]
        caution=crop_dict[prediction[0]][2]
        result = ["{} is the best crop to be cultivated right there.".format(crop),
              " {} is the best fertilizer to be used.".format(fertilizer)," {}".format(caution)]
        result = "<br>".join(result)  # Join the elements of the list into a single string
    else:
        result = "Sorry, we could not determine the best crop to be cultivated with the provided data."

    return render_template('index.html', result=result)




# python main
if __name__ == "__main__":
    app.run(debug=True)
