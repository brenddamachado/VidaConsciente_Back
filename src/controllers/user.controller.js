import { User } from "../models/User.model.js";


export const createUser =  async (name, email, password, age,gender, sexualOrientation, medicalHistory) => {
     
    const creatingUsers = await new User(name, email, password, age, gender,sexualOrientation, medicalHistory);
    
    getAllUsers.push(creatingUsers);

    return creatingUsers;
};


export const  getAllUsers = []

export const getUser = async () => {

    return getAllUsers;
};





export const updateUser = (id, updateData) =>{
    const findUserIndex = getAllUsers.findIndex(index => index.id == id);

    if(findUserIndex !== -1){

        getAllUsers[findUserIndex] = {
            ...getAllUsers[findUserIndex],
            ...updateData
        }
        return getAllUsers[findUserIndex];
    }else{
        throw new Error('User not found');
    }
};


export const deleteUser = (id) => {
    const userIndex = getAllUsers.findIndex(index => index.id === id);

    if (userIndex !== -1) {
        const deletedUser = getAllUsers.splice(userIndex, 1);  
        return deletedUser[0]
    } else {
        throw new Error('User not found');
    }
};

