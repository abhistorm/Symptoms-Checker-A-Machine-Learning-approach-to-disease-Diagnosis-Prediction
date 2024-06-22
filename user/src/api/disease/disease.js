import ApiService from "../apiservice";

const DiseaseService = {
    predictMesothelioma: async (formData) => {
            const {prediction} = await ApiService.predictDisease("mesothelioma",formData)
            return prediction
    },
    predictChronicKidneyDisease: async(formData)=>{
        const {prediction} = await ApiService.predictDisease("chronickidneydisease",formData)
        return prediction
    },
    predictCoronaryHeartDisease: async(formData)=>{
        const {prediction} = await ApiService.predictDisease("coronaryheartdisease",formData)
        return prediction
    },
    predictDiabetesMelitus: async(formData)=>{
        const {prediction} = await ApiService.predictDisease("diabetesmelitus",formData)
        return prediction
    },
    predictLiverCirrhosis: async(formData)=>{
        const {prediction} = await ApiService.predictDisease("livercirrhosis",formData)
        return prediction
    },
}

export default DiseaseService