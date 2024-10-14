import { listDSTs } from "../data/listDSTs.js";
import { DiseasesSTDs } from "../models/DiseasesSTDs.model.js"


export const createDisease = (name, type, symptoms, transmission, prevention, treatment) =>{
    let disease = new DiseasesSTDs(name, type, symptoms, transmission, prevention, treatment);
    listDSTs.push(disease);
    return disease;
}

export const searchAll = () => {
    return listDSTs;
}

export const searchName = (nameDisease) => {
    const nameExist = listDSTs.filter(nameSearch => nameSearch.name && nameSearch.name.toLowerCase().includes(nameDisease.toLowerCase()));
    if (nameExist.length > 0) {
        return nameExist
        
    } else {
        return "Nenhuma doença encontrada com esse nome"
    }
}

export const updateDisease = (diseaseId, updatedData) => {
    const idDiseaseExist = listDSTs.find(id => id.idDisease === diseaseId);
    
    if (idDiseaseExist) {
        const index = listDSTs.findIndex(id => id.idDisease === diseaseId);
        
        listDSTs[index] = {
            ...listDSTs[index],  
            ...updatedData      
        };
        return listDSTs[index];
    } else {
        return "Esse id não existe no sistema.";
    }
};

export const deleteDisease = (diseaseId) =>{
    const idDiseaseExist = listDSTs.find(id => id.idDisease === diseaseId);
    if(idDiseaseExist){
        const indexId = listDSTs.findIndex(id => id.idDisease === diseaseId);
        listDSTs.splice(indexId, 1);
        return "As informações da doença foram deletadas.";
    }else{
        return "Esse id não existe no sistema."
    }
};
