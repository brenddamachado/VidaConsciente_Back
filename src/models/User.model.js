import { v4 as uuidv4 } from 'uuid';

export class User {
    constructor(name, email, password, birthDate, gender, phone, address, city, state, cep) {
        this.id = uuidv4();
        this.name = name;
        this.email = email;
        this.password = password;
        this.birthDate = birthDate;  
        this.gender = gender;  
        this.phone = phone; 
        this.address = address;  
        this.state = state;  
        this.cep = cep;  
    }
}
