import { listDSTs } from "../data/listDSTs.js";
import { DiseasesSTDs } from "../models/DiseasesSTDs.model.js"


export const createDisease = (name, type, symptoms, transmission, prevention, treatment) =>{
    let disease = new DiseasesSTDs(name, type, symptoms, transmission, prevention, treatment);
    listDSTs.push(disease);
    return disease;
}

export const searchAll = () =>{
    return listDSTs;
}