import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { diabetesMellitus } from "../../schemas";
import DiseaseService from "../../api/disease/disease";
import PredictModal from "../PredictModal";
import LoaderSpinner from "../LoaderSpinner";

const DiabetesMellitus = () => {
  const [predicted, setPredicted] = useState(false);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values, actions) => {
    const formData = Object.values(values);
    try {
      setLoading(true);
      const prediction = await DiseaseService.predictDiabetesMelitus(formData);
      setPredicted(true);
      setLoading(false);
      setResult(prediction);
    } catch (error) {
      setLoading(false);
      console.error(error.message);
    }
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      pregnancies: "",
      glucose: "",
      diastolicBloodPressure: "",
      tricepsSkinFoldThickness: "",
      serumInsulin: "",
      bodyMassIndex: "",
      age: "",
      diabetesPedigreeFunction: "",
    },
    validationSchema: diabetesMellitus,
    onSubmit,
  });

  const handleReset = () => {
    resetForm({});
    setPredicted(false);
    setResult(null);
  };

  useEffect(() => {}, [predicted, result]);

  console.log(errors);

  return (
    <div className="w-full items-center justify-center">
      <h1 className="text-lg font-bold text-gray-600 text-center mt-8">
        Diabetes Mellitus
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-center  flex-col mt-6 py-4">
          <label htmlFor="age" className="font-semibold w-[90%] max-w-sm">
            Age
          </label>
          <input
            type="number"
            id="age"
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.age && touched.age ? "border-red-500" : ""
            }`}
            value={values.age}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Eg: 18"
          />
          {errors.age && touched.age && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.age}
            </p>
          )}

          <label
            htmlFor="pregnancies"
            className="font-semibold w-[90%] mt-8 max-w-sm"
          >
            No of Pregnancies
          </label>
          <input
            type="number"
            id="pregnancies"
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.pregnancies && touched.pregnancies ? "border-red-500" : ""
            }`}
            value={values.pregnancies}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Eg: 89"
          />
          {errors.pregnancies && touched.pregnancies && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.pregnancies}
            </p>
          )}

          <label
            htmlFor="glucose"
            className="font-semibold w-[90%] mt-8 max-w-sm"
          >
            Glucose Level
          </label>
          <input
            type="number"
            id="glucose"
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.glucose && touched.glucose ? "border-red-500" : ""
            }`}
            value={values.glucose}
            onChange={handleChange}
            onBlur={handleBlur}
            step="0.01"
            placeholder="Eg: 89"
          />
          {errors.glucose && touched.glucose && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.glucose}
            </p>
          )}

          <label
            htmlFor="diastolicBloodPressure"
            className="font-semibold w-[90%] mt-8 max-w-sm"
          >
            Blood Pressure (mm Hg)
          </label>
          <input
            type="number"
            id="diastolicBloodPressure"
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.diastolicBloodPressure && touched.diastolicBloodPressure
                ? "border-red-500"
                : ""
            }`}
            value={values.diastolicBloodPressure}
            onChange={handleChange}
            onBlur={handleBlur}
            step="0.01"
            placeholder="Eg: 89"
          />
          {errors.diastolicBloodPressure && touched.diastolicBloodPressure && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.diastolicBloodPressure}
            </p>
          )}

          <label
            htmlFor="tricepsSkinFoldThickness"
            className="font-semibold w-[90%] mt-8 max-w-sm"
          >
            Skin Thickness (in mm)
          </label>
          <input
            type="number"
            id="tricepsSkinFoldThickness"
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.tricepsSkinFoldThickness &&
              touched.tricepsSkinFoldThickness
                ? "border-red-500"
                : ""
            }`}
            value={values.tricepsSkinFoldThickness}
            onChange={handleChange}
            onBlur={handleBlur}
            step="0.01"
            placeholder="Eg: 89"
          />
          {errors.tricepsSkinFoldThickness &&
            touched.tricepsSkinFoldThickness && (
              <p className="w-[90%] max-w-sm font-medium text-red-500">
                {errors.tricepsSkinFoldThickness}
              </p>
            )}

          <label
            htmlFor="serumInsulin"
            className="font-semibold w-[90%] mt-8 max-w-sm"
          >
            Insulin (mu U/ml)
          </label>
          <input
            type="number"
            id="serumInsulin"
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.serumInsulin && touched.serumInsulin
                ? "border-red-500"
                : ""
            }`}
            value={values.serumInsulin}
            onChange={handleChange}
            onBlur={handleBlur}
            step="0.01"
            placeholder="Eg: 89"
          />
          {errors.serumInsulin && touched.serumInsulin && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.serumInsulin}
            </p>
          )}

          <label
            htmlFor="bodyMassIndex"
            className="font-semibold w-[90%] mt-8 max-w-sm"
          >
            Body Mass Index (BMI)
          </label>
          <input
            type="number"
            id="bodyMassIndex"
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.bodyMassIndex && touched.bodyMassIndex
                ? "border-red-500"
                : ""
            }`}
            value={values.bodyMassIndex}
            onChange={handleChange}
            onBlur={handleBlur}
            step="0.01"
            placeholder="Eg: 89"
          />
          {errors.bodyMassIndex && touched.bodyMassIndex && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.bodyMassIndex}
            </p>
          )}

          <label
            htmlFor="diabetesPedigreeFunction"
            className="font-semibold w-[90%] mt-8 max-w-sm"
          >
            Diabetes Pedigree Function
          </label>
          <input
            type="number"
            id="diabetesPedigreeFunction"
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.diabetesPedigreeFunction &&
              touched.diabetesPedigreeFunction
                ? "border-red-500"
                : ""
            }`}
            value={values.diabetesPedigreeFunction}
            step="0.001"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Eg: 89"
          />
          {errors.diabetesPedigreeFunction &&
            touched.diabetesPedigreeFunction && (
              <p className="w-[90%] max-w-sm font-medium text-red-500">
                {errors.diabetesPedigreeFunction}
              </p>
            )}

          {loading && <LoaderSpinner />}

          <div>
            <button
              className="my-10 mr-4 border-2 border-black bg-black disabled:opacity-30 text-gray-100 py-4 px-4 rounded"
              type="submit"
              disabled={isSubmitting}
            >
              Predict
            </button>
            <button
              className="my-10 border-2 border-black disabled:opacity-30 text-black font-semibold py-4 px-4 rounded"
              onClick={handleReset}
              type="reset"
            >
              Reset
            </button>
          </div>

          {predicted &&
            (result === 1 ? (
              <PredictModal
                text={1}
                visible={true}
                disease="Diabetes Melitus"
                reset={handleReset}
              />
            ) : (
              <PredictModal
                text={0}
                visible={true}
                disease="Diabetes Melitus"
                reset={handleReset}
              />
            ))}
        </div>
      </form>
    </div>
  );
};

export default DiabetesMellitus;
