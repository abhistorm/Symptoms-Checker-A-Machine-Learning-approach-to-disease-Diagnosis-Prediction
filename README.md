Symptom Checker is an online application made to determine a user's risk of contracting specific illnesses according to their symptoms. For the diagnosis of five diseases—liver cirrhosis, mesothelioma, chronic kidney failure, coronary heart disease, and diabetes mellitus—the application uses supervised binary categorization machine learning models that have been trained on medical datasets. The symptom checker web application, the machine learning models applied, the technical implementation, and an examination of the models' accuracy are all included in this work. The outcomes show that automated disease detection based on symptoms reported by patients is viable when utilizing machine learning. Patients can receive automatic predictions about prospective ailments with the symptom checker program, which has an intuitive user interface.On the basis of the training data, cross-validation was used to examine each model's accuracy. The models were quite successful in accurately predicting mesothelioma (94%), chronic renal disease (99%), coronary heart disease (85%), and diabetic mellitus (78%). This shows that automated disease detection based on symptoms is feasible when utilizing machine learning.The number of input symptoms supported, however, is currently constrained. The models may probably be enhanced by adding more symptoms, lab results, x-rays, genomic information, and electronic health records. The use of machine learning in disease diagnosis is shown to be feasible via the symptom checker application.

The five diseases diagnosed by symptom checker are:
• Liver cirrhosis
• Mesothelioma
• Chronic kidney disease
• Coronary heart disease
• Diabetes mellitus

These algorithms were chosen because of their widespread application and precision with medical data. Based on the patient's symptoms, the models produce a binary categorization of whether the individual in question is likely to have the condition.The web application workflow is as follows: 
1. User enters their symptoms into the React forms
2. Form is submitted to Flask backend API
3. API forwards symptoms to Python model API
4. Python API returns prediction result
5. Flask forwards prediction result back to React frontend
6. Result is displayed to user

Result GUI
The purpose of the machine learning models that were employed, the technical execution, and a study of the model accuracy[3]. The intended audience consists of technical and medical specialists who are curious about how machine learning and illness diagnostics interact.
![image](https://github.com/abhistorm/Symptoms-Checker-A-Machine-Learning-approach-to-disease-Diagnosis-Prediction/assets/74293846/d58bd59d-5b5b-4c22-9b2e-f95223d9ade1)

Conclusions
Patients can use the Symptom Checker web application to acquire automated disease likelihood estimations based on their symptoms through an easy-to-use interface. By studying confirmed medical instances, the backend machine learning models can consistently and accurately diagnose five diseases. To deliver the application, the technological implementation makes use of the benefits of Python, Flask, and React. Machine learning-based automated disease detection has the potential to significantly reduce the workload of doctors and enhance the health of patients through early intervention. The viability of this strategy is demonstrated by the symptom checker application. The platform will be expanded to more diseases, more symptoms and data kinds will be included, and model accuracy will continue to be improved.
