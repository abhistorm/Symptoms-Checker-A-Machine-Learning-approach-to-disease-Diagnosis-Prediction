import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { liverCirrhosisSchema } from "../../schemas";
import DiseaseService from "../../api/disease/disease";
import PredictModal from "../PredictModal";
import LoaderSpinner from "../LoaderSpinner";

const LiverCirrhosis = () => {
  const [predicted, setPredicted] = useState(false);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values) => {
    const formData = Object.values(values);
    try {
      setLoading(true);
      const prediction = await DiseaseService.predictLiverCirrhosis(formData);
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
      presenceOfAscites: "",
      presenceOfHepatomegaly: "",
      presenceOfSpiders: "",
      presenceOfEdema: "",
      serumBilirubin: "",
      serumCholesterol: "",
      albumin: "",
      urineCopper: "",
      alkalinePhosphate: "",
      sgot: "",
      triglycerides: "",
      plateletsPerCubic: "",
      prothrombinTimeInSec: "",
    },
    validationSchema: liverCirrhosisSchema,
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
        Liver Cirrhosis
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
            <option value={1} label="Male">
              Male
            </option>
            <option value={0} label="Female">
              Female
            </option>
          </select>
          {errors.gender && touched.gender && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.gender}
            </p>
          )}

          <label
            htmlFor="presenceOfAscites"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Presence of Ascites
          </label>
          <select
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.presenceOfAscites && touched.presenceOfAscites
                ? "border-red-600"
                : ""
            }`}
            id="presenceOfAscites"
            value={values.presenceOfAscites}
            onChange={(e) =>
              setFieldValue("presenceOfAscites", Number(e.target.value))
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
          {errors.presenceOfAscites && touched.presenceOfAscites && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.presenceOfAscites}
            </p>
          )}

          <label
            htmlFor="presenceOfHepatomegaly"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Presence Of Hepatomegaly
          </label>
          <select
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.presenceOfHepatomegaly && touched.presenceOfHepatomegaly
                ? "border-red-600"
                : ""
            }`}
            id="presenceOfHepatomegaly"
            value={values.presenceOfHepatomegaly}
            onChange={(e) =>
              setFieldValue("presenceOfHepatomegaly", Number(e.target.value))
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
          {errors.presenceOfHepatomegaly && touched.presenceOfHepatomegaly && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.presenceOfHepatomegaly}
            </p>
          )}

          <label
            htmlFor="presenceOfSpiders"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Presence of Spiders
          </label>
          <select
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.presenceOfSpiders && touched.presenceOfSpiders
                ? "border-red-600"
                : ""
            }`}
            id="presenceOfSpiders"
            value={values.presenceOfSpiders}
            onChange={(e) =>
              setFieldValue("presenceOfSpiders", Number(e.target.value))
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
          {errors.presenceOfSpiders && touched.presenceOfSpiders && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.presenceOfSpiders}
            </p>
          )}

          <label
            htmlFor="presenceOfEdema"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Presence Of Edema
          </label>
          <select
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.presenceOfEdema && touched.presenceOfEdema
                ? "border-red-600"
                : ""
            }`}
            id="presenceOfEdema"
            value={values.presenceOfEdema}
            onChange={(e) =>
              setFieldValue("presenceOfEdema", Number(e.target.value))
            }
          >
            <option value="" label="Select an option">
              --select an option--
            </option>
            <option
              value={0}
              label="No Edema and No Diuretic therapy for Edema"
            >
              No Edema and No Diuretic therapy for Edema
            </option>
            <option
              value={1}
              label="Edema Present without Diuretics/ Edema Resolved by Diuretics"
            >
              Edema Present without Diuretics/ Edema Resolved by Diuretics
            </option>
            <option value={2} label="Edema despite Diuretic Therapy">
              Edema despite Diuretic Therapy
            </option>
          </select>
          {errors.presenceOfEdema && touched.presenceOfEdema && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.presenceOfEdema}
            </p>
          )}

          <label
            htmlFor="serumBilirubin"
            className="font-semibold w-[90%] mt-8 max-w-sm"
          >
            Serum Bilirubin in (mg/dl)
          </label>
          <input
            type="number"
            id="serumBilirubin"
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.serumBilirubin && touched.serumBilirubin
                ? "border-red-500"
                : ""
            }`}
            value={values.serumBilirubin}
            onChange={handleChange}
            onBlur={handleBlur}
            step="0.01"
            placeholder="Eg: 89"
          />
          {errors.serumBilirubin && touched.serumBilirubin && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.serumBilirubin}
            </p>
          )}

          <label
            htmlFor="serumCholesterol"
            className="font-semibold w-[90%] mt-8 max-w-sm"
          >
            Serum Cholestrol in (mg/dl)
          </label>
          <input
            type="number"
            id="serumCholesterol"
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.serumCholesterol && touched.serumCholesterol
                ? "border-red-500"
                : ""
            }`}
            value={values.serumCholesterol}
            onChange={handleChange}
            onBlur={handleBlur}
            step="0.01"
            placeholder="Eg: 89"
          />
          {errors.serumCholesterol && touched.serumCholesterol && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.serumCholesterol}
            </p>
          )}

          <label
            htmlFor="albumin"
            className="font-semibold w-[90%] mt-8 max-w-sm"
          >
            Albumin in (mg/dl)
          </label>
          <input
            type="number"
            id="albumin"
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.albumin && touched.albumin ? "border-red-500" : ""
            }`}
            value={values.albumin}
            onChange={handleChange}
            onBlur={handleBlur}
            step="0.01"
            placeholder="Eg: 89"
          />
          {errors.albumin && touched.albumin && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.albumin}
            </p>
          )}

          <label
            htmlFor="urineCopper"
            className="font-semibold w-[90%] mt-8 max-w-sm"
          >
            Urine Copper in (Ug/day)
          </label>
          <input
            type="number"
            id="urineCopper"
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.urineCopper && touched.urineCopper ? "border-red-500" : ""
            }`}
            value={values.urineCopper}
            onChange={handleChange}
            onBlur={handleBlur}
            step="0.01"
            placeholder="Eg: 89"
          />
          {errors.urineCopper && touched.urineCopper && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.urineCopper}
            </p>
          )}

          <label
            htmlFor="alkalinePhosphate"
            className="font-semibold w-[90%] mt-8 max-w-sm"
          >
            Alkaline Phosphate in (U/Liter)
          </label>
          <input
            type="number"
            id="alkalinePhosphate"
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.alkalinePhosphate && touched.alkalinePhosphate
                ? "border-red-500"
                : ""
            }`}
            value={values.alkalinePhosphate}
            onChange={handleChange}
            onBlur={handleBlur}
            step="0.01"
            placeholder="Eg: 89"
          />
          {errors.alkalinePhosphate && touched.alkalinePhosphate && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.alkalinePhosphate}
            </p>
          )}

          <label htmlFor="sgot" className="font-semibold w-[90%] mt-8 max-w-sm">
            SGOT in (U/liter)
          </label>
          <input
            type="number"
            id="sgot"
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.sgot && touched.sgot ? "border-red-500" : ""
            }`}
            value={values.sgot}
            onChange={handleChange}
            onBlur={handleBlur}
            step="0.01"
            placeholder="Eg: 89"
          />
          {errors.sgot && touched.sgot && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.sgot}
            </p>
          )}

          <label
            htmlFor="triglycerides"
            className="font-semibold w-[90%] mt-8 max-w-sm"
          >
            Triglycerides in (mg/dl)
          </label>
          <input
            type="number"
            id="triglycerides"
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.triglycerides && touched.triglycerides
                ? "border-red-500"
                : ""
            }`}
            value={values.triglycerides}
            onChange={handleChange}
            onBlur={handleBlur}
            step="0.01"
            placeholder="Eg: 89"
          />
          {errors.triglycerides && touched.triglycerides && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.triglycerides}
            </p>
          )}

          <label
            htmlFor="plateletsPerCubic"
            className="font-semibold w-[90%] mt-8 max-w-sm"
          >
            Platelets per Cubic (ml/1000)
          </label>
          <input
            type="number"
            id="plateletsPerCubic"
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.plateletsPerCubic && touched.plateletsPerCubic
                ? "border-red-500"
                : ""
            }`}
            value={values.plateletsPerCubic}
            onChange={handleChange}
            onBlur={handleBlur}
            step="0.01"
            placeholder="Eg: 89"
          />
          {errors.plateletsPerCubic && touched.plateletsPerCubic && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.plateletsPerCubic}
            </p>
          )}

          <label
            htmlFor="prothrombinTimeInSec"
            className="font-semibold w-[90%] mt-8 max-w-sm"
          >
            Prothrombin Time in Seconds (s)
          </label>
          <input
            type="number"
            id="prothrombinTimeInSec"
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.prothrombinTimeInSec && touched.prothrombinTimeInSec
                ? "border-red-500"
                : ""
            }`}
            value={values.prothrombinTimeInSec}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Eg: 89"
          />
          {errors.prothrombinTimeInSec && touched.prothrombinTimeInSec && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.prothrombinTimeInSec}
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
                disease="Liver Cirrhosis"
                reset={handleReset}
              />
            ) : (
              <PredictModal
                text={0}
                visible={true}
                disease="Liver Cirrhosis"
                reset={handleReset}
              />
            ))}
        </div>
      </form>
    </div>
  );
};

export default LiverCirrhosis;
