import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { chronicKidneyDisease } from "../../schemas";
import DiseaseService from "../../api/disease/disease";
import PredictModal from "../PredictModal";
import LoaderSpinner from "../LoaderSpinner";

const ChronicKidneyDiease = () => {
  const [predicted, setPredicted] = useState(false);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values, actions) => {
    const formData = Object.values(values);

    try {
      setLoading(true);
      const prediction = await DiseaseService.predictChronicKidneyDisease(
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
      bloodPressure: "",
      specificGravity: "",
      redBloodCellsInUrine: "",
      posCellInUrine: "",
      posCellClumpsInUrine: "",
      bacteriaInUrine: "",
      bloodGlucoseRandom: "",
      bloodUrea: "",
      serumCreatinine: "",
      sodium: "",
      potassium: "",
      haemoglobin: "",
      packedCellVolumeInPercentage: "",
      whiteBloodCellCount: "",
      redBloodCellCount: "",
      hypertension: "",
      diabetesMellitus: "",
      coronaryArteryDisease: "",
      pedalEdema: "",
      appetite: "",
      anemia: "",
    },
    validationSchema: chronicKidneyDisease,
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
        Chronic Kidney Disease
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
            htmlFor="bloodPressure"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Blood Pressure (in mm Hg)
          </label>
          <input
            type="number"
            id="bloodPressure"
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.bloodPressure && touched.bloodPressure
                ? "border-red-500"
                : ""
            }`}
            value={values.bloodPressure}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Eg: 20"
          />
          {errors.bloodPressure && touched.bloodPressure && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.bloodPressure}
            </p>
          )}

          <label
            htmlFor="specificGravity"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Resting Blood Pressure (in mm Hg)
          </label>
          <input
            type="number"
            id="specificGravity"
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.specificGravity && touched.specificGravity
                ? "border-red-500"
                : ""
            }`}
            value={values.specificGravity}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Eg: 20"
          />
          {errors.specificGravity && touched.specificGravity && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.specificGravity}
            </p>
          )}

          <label
            htmlFor="redBloodCellsInUrine"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            RBC in Urine
          </label>
          <select
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.redBloodCellsInUrine && touched.redBloodCellsInUrine
                ? "border-red-600"
                : ""
            }`}
            id="redBloodCellsInUrine"
            value={values.redBloodCellsInUrine}
            onChange={(e) =>
              setFieldValue("redBloodCellsInUrine", Number(e.target.value))
            }
          >
            <option value="" label="Select an option">
              --select an option--
            </option>
            <option value={1} label="Normal">
              Normal
            </option>
            <option value={0} label="Abnormal">
              Abnormal
            </option>
          </select>
          {errors.redBloodCellsInUrine && touched.redBloodCellsInUrine && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.redBloodCellsInUrine}
            </p>
          )}

          <label
            htmlFor="posCellInUrine"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            POS Cell in Urine
          </label>
          <select
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.posCellInUrine && touched.posCellInUrine
                ? "border-red-600"
                : ""
            }`}
            id="posCellInUrine"
            value={values.posCellInUrine}
            onChange={(e) =>
              setFieldValue("posCellInUrine", Number(e.target.value))
            }
          >
            <option value="" label="Select an option">
              --select an option--
            </option>
            <option value={1} label="Normal">
              Normal
            </option>
            <option value={0} label="Abnormal">
              Abnormal
            </option>
          </select>
          {errors.posCellInUrine && touched.posCellInUrine && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.posCellInUrine}
            </p>
          )}

          <label
            htmlFor="posCellClumpsInUrine"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            POS Cell Clumpsin Urine
          </label>
          <select
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.posCellClumpsInUrine && touched.posCellClumpsInUrine
                ? "border-red-600"
                : ""
            }`}
            id="posCellClumpsInUrine"
            value={values.posCellClumpsInUrine}
            onChange={(e) =>
              setFieldValue("posCellClumpsInUrine", Number(e.target.value))
            }
          >
            <option value="" label="Select an option">
              --select an option--
            </option>
            <option value={1} label="Present">
              Present
            </option>
            <option value={0} label="Not Present">
              Not Present
            </option>
          </select>
          {errors.posCellClumpsInUrine && touched.posCellClumpsInUrine && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.posCellClumpsInUrine}
            </p>
          )}

          <label
            htmlFor="bacteriaInUrine"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Bacteria in Urine
          </label>
          <select
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.bacteriaInUrine && touched.bacteriaInUrine
                ? "border-red-600"
                : ""
            }`}
            id="bacteriaInUrine"
            value={values.bacteriaInUrine}
            onChange={(e) =>
              setFieldValue("bacteriaInUrine", Number(e.target.value))
            }
          >
            <option value="" label="Select an option">
              --select an option--
            </option>
            <option value={1} label="Present">
              Present
            </option>
            <option value={0} label="Not Present">
              Not Present
            </option>
          </select>
          {errors.bacteriaInUrine && touched.bacteriaInUrine && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.bacteriaInUrine}
            </p>
          )}

          <label
            htmlFor="bloodGlucoseRandom"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Blood Glucose Random (in mgs/dl)
          </label>
          <input
            type="number"
            id="bloodGlucoseRandom"
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.bloodGlucoseRandom && touched.bloodGlucoseRandom
                ? "border-red-500"
                : ""
            }`}
            value={values.bloodGlucoseRandom}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Eg: 20"
          />
          {errors.bloodGlucoseRandom && touched.bloodGlucoseRandom && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.bloodGlucoseRandom}
            </p>
          )}

          <label
            htmlFor="bloodUrea"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Blood Urea (in mgs/dl)
          </label>
          <input
            type="number"
            id="bloodUrea"
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.bloodUrea && touched.bloodUrea ? "border-red-500" : ""
            }`}
            value={values.bloodUrea}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Eg: 20"
          />
          {errors.bloodUrea && touched.bloodUrea && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.bloodUrea}
            </p>
          )}

          <label
            htmlFor="serumCreatinine"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Serum Creatinine (in mgs/dl)
          </label>
          <input
            type="number"
            id="serumCreatinine"
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.serumCreatinine && touched.serumCreatinine
                ? "border-red-500"
                : ""
            }`}
            value={values.serumCreatinine}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Eg: 20"
          />
          {errors.serumCreatinine && touched.serumCreatinine && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.serumCreatinine}
            </p>
          )}

          <label
            htmlFor="sodium"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Sodium (in MEq/L)
          </label>
          <input
            type="number"
            id="sodium"
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.sodium && touched.sodium ? "border-red-500" : ""
            }`}
            value={values.sodium}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Eg: 20"
          />
          {errors.sodium && touched.sodium && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.sodium}
            </p>
          )}

          <label
            htmlFor="potassium"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Potassium (in MEq/L)
          </label>
          <input
            type="number"
            id="potassium"
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.potassium && touched.potassium ? "border-red-500" : ""
            }`}
            value={values.potassium}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Eg: 20"
          />
          {errors.potassium && touched.potassium && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.potassium}
            </p>
          )}

          <label
            htmlFor="haemoglobin"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Haemoglobin (in gms)
          </label>
          <input
            type="number"
            id="haemoglobin"
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.haemoglobin && touched.haemoglobin ? "border-red-500" : ""
            }`}
            value={values.haemoglobin}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Eg: 20"
          />
          {errors.haemoglobin && touched.haemoglobin && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.haemoglobin}
            </p>
          )}

          <label
            htmlFor="packedCellVolumeInPercentage"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Packed Cell Volume(in %)
          </label>
          <input
            type="number"
            id="packedCellVolumeInPercentage"
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.packedCellVolumeInPercentage &&
              touched.packedCellVolumeInPercentage
                ? "border-red-500"
                : ""
            }`}
            value={values.packedCellVolumeInPercentage}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Eg: 20"
          />
          {errors.packedCellVolumeInPercentage &&
            touched.packedCellVolumeInPercentage && (
              <p className="w-[90%] max-w-sm font-medium text-red-500">
                {errors.packedCellVolumeInPercentage}
              </p>
            )}

          <label
            htmlFor="whiteBloodCellCount"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            WBC count (in cells/cumm)
          </label>
          <input
            type="number"
            id="whiteBloodCellCount"
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.whiteBloodCellCount && touched.whiteBloodCellCount
                ? "border-red-500"
                : ""
            }`}
            value={values.whiteBloodCellCount}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Eg: 20"
          />
          {errors.whiteBloodCellCount && touched.whiteBloodCellCount && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.whiteBloodCellCount}
            </p>
          )}

          <label
            htmlFor="redBloodCellCount"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            RBC count (in millions/cmm)
          </label>
          <input
            type="number"
            id="redBloodCellCount"
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.redBloodCellCount && touched.redBloodCellCount
                ? "border-red-500"
                : ""
            }`}
            value={values.redBloodCellCount}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Eg: 20"
          />
          {errors.redBloodCellCount && touched.redBloodCellCount && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.redBloodCellCount}
            </p>
          )}

          <label
            htmlFor="hypertension"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Hypertension
          </label>
          <select
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.hypertension && touched.hypertension
                ? "border-red-600"
                : ""
            }`}
            id="hypertension"
            value={values.hypertension}
            onChange={(e) =>
              setFieldValue("hypertension", Number(e.target.value))
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
          {errors.hypertension && touched.hypertension && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.hypertension}
            </p>
          )}

          <label
            htmlFor="diabetesMellitus"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Diabetes Mellitus
          </label>
          <select
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.diabetesMellitus && touched.diabetesMellitus
                ? "border-red-600"
                : ""
            }`}
            id="diabetesMellitus"
            value={values.diabetesMellitus}
            onChange={(e) =>
              setFieldValue("diabetesMellitus", Number(e.target.value))
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
          {errors.diabetesMellitus && touched.diabetesMellitus && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.diabetesMellitus}
            </p>
          )}

          <label
            htmlFor="coronaryArteryDisease"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Coronary Artery Disease
          </label>
          <select
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.coronaryArteryDisease && touched.coronaryArteryDisease
                ? "border-red-600"
                : ""
            }`}
            id="coronaryArteryDisease"
            value={values.coronaryArteryDisease}
            onChange={(e) =>
              setFieldValue("coronaryArteryDisease", Number(e.target.value))
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
          {errors.coronaryArteryDisease && touched.coronaryArteryDisease && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.coronaryArteryDisease}
            </p>
          )}

          <label
            htmlFor="appetite"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Appetite
          </label>
          <select
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.appetite && touched.appetite ? "border-red-600" : ""
            }`}
            id="appetite"
            value={values.appetite}
            onChange={(e) => setFieldValue("appetite", Number(e.target.value))}
          >
            <option value="" label="Select an option">
              --select an option--
            </option>
            <option value={0} label="Good">
              Good
            </option>
            <option value={1} label="Poor">
              Poor
            </option>
          </select>
          {errors.appetite && touched.appetite && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.appetite}
            </p>
          )}

          <label
            htmlFor="pedalEdema"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Pedal Edema
          </label>
          <select
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.pedalEdema && touched.pedalEdema ? "border-red-600" : ""
            }`}
            id="pedalEdema"
            value={values.pedalEdema}
            onChange={(e) =>
              setFieldValue("pedalEdema", Number(e.target.value))
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
          {errors.pedalEdema && touched.pedalEdema && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.pedalEdema}
            </p>
          )}

          <label
            htmlFor="anemia"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Anemia
          </label>
          <select
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.anemia && touched.anemia ? "border-red-600" : ""
            }`}
            id="anemia"
            value={values.anemia}
            onChange={(e) => setFieldValue("anemia", Number(e.target.value))}
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
          {errors.anemia && touched.anemia && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.anemia}
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
                disease="Chronic Kidney Disease"
                reset={handleReset}
              />
            ) : (
              <PredictModal
                text={0}
                visible={true}
                disease="Chronic Kidney Disease"
                reset={handleReset}
              />
            ))}
        </div>
      </form>
    </div>
  );
};

export default ChronicKidneyDiease;
