import { v4 as uuidv4 } from "uuid"

export class DiseasesSTDs{
    constructor(name, type, symptoms, transmission, prevention, treatment){
        this.idDisease = uuidv4();
        this.name = name;
        this.type = type;
        this.symptoms = symptoms;
        this.transmission = transmission;
        this.prevention = prevention;
        this.treatment = treatment;
    }
}