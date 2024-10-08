import { UUIDV4 } from "sequelize";

export class User {

    constructor(name, email, password, age,sexualOrientation, medicalHistory){
        this.id = UUIDV4;
        this.name = name;
        this.email = email;
        this.password = password;
        this.age = age;
        this.sexualOrientation = sexualOrientation;
        this.medicalHistory = medicalHistory;
    

    }
}