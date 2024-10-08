import { v4 as uuidv4 } from 'uuid'

export class User {

    constructor(name, email, password, age,gender, sexualOrientation, medicalHistory){
        this.id = uuidv4;
        this.name = name;
        this.email = email;
        this.password = password;
        this.age = age;
        this.gender = gender
        this.sexualOrientation = sexualOrientation;
        this.medicalHistory = medicalHistory;
    

    }
}