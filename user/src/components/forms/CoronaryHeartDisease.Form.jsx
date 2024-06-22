import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { coronaryHeartDisease } from "../../schemas";
import DiseaseService from "../../api/disease/disease";
import PredictModal from "../PredictModal";
import LoaderSpinner from "../LoaderSpinner";

const CoronaryHeartDisease = () => {
  const [predicted, setPredicted] = useState(false);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values, actions) => {
    const formData = Object.values(values);
    try {
      setLoading(true);
      const prediction = await DiseaseService.predictCoronaryHeartDisease(
        formData
      );
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
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      age: "",
      gender: "",
      chestPainType: "",
      restingBloodPressure: "",
      serumCholestrol: "",
      fastingBloodSugar: "",
      restingElectrographicResults: "",
      maximumHeartRateAchieved: "",
      exerciseInducedAngina: "",
      oldPeak: "",
      slopeOfPeakExercise: "",
      numberOfMajorVessels: "",
    },
    validationSchema: coronaryHeartDisease,
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
        Coronary Heart Disease
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
            htmlFor="gender"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Gender
          </label>
          <select
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.gender && touched.gender ? "border-red-600" : ""
            }`}
            id="gender"
            value={values.gender}
            onChange={(e) => setFieldValue("gender", Number(e.target.value))}
          >
            <option value="" label="Select an option">
              --select an option--
            </option>
            <option value={0} label="Male">
              Male
            </option>
            <option value={1} label="Female">
              Female
            </option>
          </select>
          {errors.gender && touched.gender && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.gender}
            </p>
          )}

          <label
            htmlFor="chestPainType"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Chest Pain Type
          </label>

          <select
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.chestPainType && touched.chestPainType
                ? "border-red-600"
                : ""
            }`}
            id="chestPainType"
            value={values.chestPainType}
            onChange={(e) =>
              setFieldValue("chestPainType", Number(e.target.value))
            }
          >
            <option value="" label="Select an option">
              --select an option--
            </option>
            <option value={0} label="Asymptomatic">
              Asymptomatic
            </option>
            <option value={1} label="Non-Anginal">
              Non-Anginal
            </option>
            <option value={2} label="Atypical Angina">
              Atypical Angina
            </option>
            <option value={3} label="Typical Angina">
              Typical Angina
            </option>
          </select>
          {errors.chestPainType && touched.chestPainType && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.chestPainType}
            </p>
          )}

          <label
            htmlFor="restingBloodPressure"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Resting Blood Pressure (in mm Hg)
          </label>
          <input
            type="number"
            id="restingBloodPressure"
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.restingBloodPressure && touched.restingBloodPressure
                ? "border-red-500"
                : ""
            }`}
            value={values.restingBloodPressure}
            onChange={handleChange}
            onBlur={handleBlur}
            step="0.01"
            placeholder="Eg: 20"
          />
          {errors.restingBloodPressure && touched.restingBloodPressure && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.restingBloodPressure}
            </p>
          )}

          <label
            htmlFor="serumCholestrol"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Serum Cholestrol (in mg/dl)
          </label>
          <input
            type="number"
            id="serumCholestrol"
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.serumCholestrol && touched.serumCholestrol
                ? "border-red-500"
                : ""
            }`}
            value={values.serumCholestrol}
            onChange={handleChange}
            onBlur={handleBlur}
            step="0.01"
            placeholder="Eg: 20"
          />
          {errors.serumCholestrol && touched.serumCholestrol && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.serumCholestrol}
            </p>
          )}

          <label
            htmlFor="fastingBloodSugar"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Is Fasting Bloog Sugar is greater than 120mg/dl{" "}
          </label>
          <select
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.fastingBloodSugar && touched.fastingBloodSugar
                ? "border-red-600"
                : ""
            }`}
            id="fastingBloodSugar"
            value={values.fastingBloodSugar}
            placeholder="Eg: Male"
            onChange={(e) =>
              setFieldValue("fastingBloodSugar", Number(e.target.value))
            }
          >
            <option value="" label="Select an option">
              --select an option--
            </option>
            <option value={1} label="Yes">
              Yes
            </option>
            <option value={0} label="No">
              No
            </option>
          </select>
          {errors.fastingBloodSugar && touched.fastingBloodSugar && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.fastingBloodSugar}
            </p>
          )}

          <label
            htmlFor="restingElectrographicResults"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Resting ElectroGraphic Results
          </label>
          <select
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.restingElectrographicResults &&
              touched.restingElectrographicResults
                ? "border-red-600"
                : ""
            }`}
            id="restingElectrographicResults"
            value={values.restingElectrographicResults}
            placeholder="Eg: Male"
            onChange={(e) =>
              setFieldValue(
                "restingElectrographicResults",
                Number(e.target.value)
              )
            }
          >
            <option value="" label="Select an option">
              --select an option--
            </option>
            <option value={0} label="Normal">
              Normal
            </option>
            <option value={1} label="LV Hypertrophy">
              LV Hypertrophy
            </option>
            <option value={2} label="STT Abnormality">
              STT Abnormality
            </option>
          </select>
          {errors.restingElectrographicResults &&
            touched.restingElectrographicResults && (
              <p className="w-[90%] max-w-sm font-medium text-red-500">
                {errors.restingElectrographicResults}
              </p>
            )}

          <label
            htmlFor="maximumHeartRateAchieved"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Maximum Heart Rate Acheived
          </label>
          <input
            type="number"
            id="maximumHeartRateAchieved"
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.maximumHeartRateAchieved &&
              touched.maximumHeartRateAchieved
                ? "border-red-500"
                : ""
            }`}
            value={values.maximumHeartRateAchieved}
            onChange={handleChange}
            onBlur={handleBlur}
            step="0.01"
            placeholder="Eg: 20"
          />
          {errors.maximumHeartRateAchieved &&
            touched.maximumHeartRateAchieved && (
              <p className="w-[90%] max-w-sm font-medium text-red-500">
                {errors.maximumHeartRateAchieved}
              </p>
            )}

          <label
            htmlFor="exerciseInducedAngina"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Exercise-Induced Angina
          </label>
          <select
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.exerciseInducedAngina && touched.exerciseInducedAngina
                ? "border-red-600"
                : ""
            }`}
            id="exerciseInducedAngina"
            value={values.exerciseInducedAngina}
            placeholder="Eg: Male"
            onChange={(e) =>
              setFieldValue("exerciseInducedAngina", Number(e.target.value))
            }
          >
            <option value="" label="Select an option">
              --select an option--
            </option>
            <option value={1} label="Yes">
              Yes
            </option>
            <option value={0} label="No">
              No
            </option>
          </select>
          {errors.exerciseInducedAngina && touched.exerciseInducedAngina && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.exerciseInducedAngina}
            </p>
          )}

          <label
            htmlFor="oldPeak"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            OldPeak (ST Depression Induced by exercise relative to rest)
          </label>
          <input
            type="number"
            id="oldPeak"
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.oldPeak && touched.oldPeak ? "border-red-500" : ""
            }`}
            value={values.oldPeak}
            onChange={handleChange}
            onBlur={handleBlur}
            step="0.01"
            placeholder="Eg: 20"
          />
          {errors.oldPeak && touched.oldPeak && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.oldPeak}
            </p>
          )}

          <label
            htmlFor="slopeOfPeakExercise"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Slope of the Peak Exercise ST segment
          </label>
          <select
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.slopeOfPeakExercise && touched.slopeOfPeakExercise
                ? "border-red-600"
                : ""
            }`}
            id="slopeOfPeakExercise"
            value={values.slopeOfPeakExercise}
            onChange={(e) =>
              setFieldValue("slopeOfPeakExercise", Number(e.target.value))
            }
          >
            <option value="" label="Select an option">
              --select an option--
            </option>
            <option value={0} label="Flat">
              Flat
            </option>
            <option value={1} label="Upsloping">
              Upsloping
            </option>
            <option value={2} label="Downsloping">
              Downsloping
            </option>
          </select>
          {errors.slopeOfPeakExercise && touched.slopeOfPeakExercise && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.slopeOfPeakExercise}
            </p>
          )}

          <label
            htmlFor="numberOfMajorVessels"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Number of the Major Vessels
          </label>
          <select
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.numberOfMajorVessels && touched.numberOfMajorVessels
                ? "border-red-600"
                : ""
            }`}
            id="numberOfMajorVessels"
            value={values.numberOfMajorVessels}
            placeholder="Eg: Male"
            onChange={(e) =>
              setFieldValue("numberOfMajorVessels", Number(e.target.value))
            }
          >
            <option value="" label="Select an option">
              --select an option--
            </option>
            <option value={0} label="0">
              0
            </option>
            <option value={1} label="1">
              1
            </option>
            <option value={2} label="2">
              2
            </option>
            <option value={3} label="3">
              3
            </option>
          </select>
          {errors.numberOfMajorVessels && touched.numberOfMajorVessels && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.numberOfMajorVessels}
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
                disease="Coronary Heart Disease"
                reset={handleReset}
              />
            ) : (
              <PredictModal
                text={0}
                visible={true}
                disease="Coronary Heart Disease"
                reset={handleReset}
              />
            ))}
        </div>
      </form>
    </div>
  );
};

export default CoronaryHeartDisease;
