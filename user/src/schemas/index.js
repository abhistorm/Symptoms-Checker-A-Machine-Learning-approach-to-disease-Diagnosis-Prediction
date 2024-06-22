import * as yup from "yup";

export const mesotheliomaSchema = yup.object({
    age:  yup.string()
    .required('Please fill in your age')
    .typeError('Please enter a valid number for your age'),
    gender: yup.string().required("Required"),
    smoking:yup.string().required("Required"),
    yellowFingers:yup.string().required("Required"),
    anxiety:yup.string().required("Required"),
    peerPressure:yup.string().required("Required"),
    chronicDisease:yup.string().required("Required"),
    fatigue:yup.string().required("Required"),
    allergy:yup.string().required("Required"),
    wheezing:yup.string().required("Required"),
    alcohol:yup.string().required("Required"),
    coughing:yup.string().required("Required"),
    shortnessOfBreath:yup.string().required("Required"),
    swallowingDifficulty:yup.string().required("Required"),
    chestPain:yup.string().required("Required"),
})




export const liverCirrhosisSchema = yup.object({
  age: yup.number().positive().integer().required("Required"),
  gender: yup.string().required("Required"),
  presenceOfAscites:yup.string().required("Required"),
  presenceOfHepatomegaly:yup.string().required("Required"),
  presenceOfSpiders:yup.string().required("Required"),
  presenceOfEdema:yup.string().required("Required"),
  serumBilirubin:yup.string().required("Required"),
  serumCholesterol:yup.string().required("Required"),
  albumin:yup.string().required("Required"),
  urineCopper:yup.string().required("Required"),
  alkalinePhosphate:yup.string().required("Required"),
  sgot:yup.string().required("Required"),
  triglycerides:yup.string().required("Required"),
  plateletsPerCubic:yup.string().required("Required"),
  prothrombinTimeInSec:yup.string().required("Required"),
})

export const coronaryHeartDisease = yup.object({
  age: yup.number().positive().integer("Must be Integer").required("Required"),
  gender: yup.string().required("Required"),
  chestPainType: yup.string().required("Required"),
  restingBloodPressure: yup
    .number()
    .positive()
    .required("Required"),
  serumCholestrol: yup
    .number()
    .positive()
    .required("Required"),
  fastingBloodSugar: yup.string().required("Required"),
  restingElectrographicResults: yup.string().required("Required"),
  maximumHeartRateAchieved: yup
    .number()
    .positive()
    .required("Required"),
  exerciseInducedAngina: yup.string().required("Required"),
  oldPeak: yup
    .number()
    .positive()
    .required("Required"),
  slopeOfPeakExercise:yup.string().required("Required"),
  numberOfMajorVessels: yup.string().required("Required"),
});

export const diabetesMellitus = yup.object({
  age: yup.number().positive().integer("Must be Integer").required("Required"),
  pregnancies: yup
    .number()
    .positive()
    .integer("Must be Integer")
    .required("Required"),
  glucose: yup
    .number()
    .positive()
    .required("Required"),
  diastolicBloodPressure: yup
    .number()
    .positive()
    .required("Required"),
  tricepsSkinFoldThickness: yup
    .number()
    .positive()
    .required("Required"),
  serumInsulin: yup
    .number()

    .required("Required"),
  bodyMassIndex: yup
    .number()
    .positive()
    .required("Required"),
  diabetesPedigreeFunction: yup
    .number("Must be Numeric Digits")
    .positive()
    .required("Required"),
});

export const chronicKidneyDisease = yup.object({
  age: yup.number().positive().integer("Must be Integer").required("Required"),
  bloodPressure: yup.number().positive().required("Required"),
  specificGravity: yup.number().positive().required("Required"),
  redBloodCellsInUrine: yup.string().required("Required"),
  posCellInUrine: yup.string().required("Required"),
  posCellClumpsInUrine: yup.string().required("Required"),
  bacteriaInUrine: yup.string().required("Required"),
  bloodGlucoseRandom: yup.number().positive().required("Required"),
  bloodUrea: yup.number().positive().required("Required"),
  serumCreatinine: yup.number().positive().required("Required"),
  sodium: yup.number().positive().required("Required"),
  potassium: yup.number().positive().required("Required"),
  haemoglobin: yup.number().positive().required("Required"),
  packedCellVolumeInPercentage: yup.number().positive().required("Required"),
  whiteBloodCellCount: yup.number().positive().required("Required"),
  redBloodCellCount: yup.number().positive().required("Required"),
  hypertension: yup.string().required("Required"),
  diabetesMellitus: yup.string().required("Required"),
  coronaryArteryDisease: yup.string().required("Required"),
  pedalEdema:yup.string().required("Required"),
  appetite: yup.string().required("Required"),
  anemia: yup.string().required("Required"),
});

