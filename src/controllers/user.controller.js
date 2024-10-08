import { Sequelize } from "sequelize";
import { User } from "../models/User.model.js";


export const createUser =  async (name, email, password, age,sexualOrientation, medicalHistory) => {
     
    const creatingUsers = await User.create({name, email, password, age,sexualOrientation, medicalHistory});
    
    getAll.push(creatingUsers);

    return creatingUsers;
};


const  getAll = []

export const getUser = async () => {
    const users = await User.findAll(); 
    return users;
};


export const updateUser = () => {

};


export const deleteUser = () => {

};