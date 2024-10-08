import { Router } from "express";

import { createUser, getUser, updateUser, deleteUser, getAllUsers } from "../controllers/user.controller.js";
 
export const userRouter = Router();


userRouter.post("/createUser", async (req,res)=>{
    const { name, email, password, age, gender,sexualOrientation, medicalHistory } = req.body;

    try {
        const newUser = await createUser(name, email, password, age, gender, sexualOrientation, medicalHistory);
        return res.status(201).json({message: 'User created sucessfuly', data: newUser})
    
    } catch (error) {
        return res.status(500).json({message:'Failed to create user!', error: error.message})
    }
})

userRouter.get("/getAllUser", (req,res)=>{
    const findUser = getUser()
    if (findUser.length < 1) {
        res.send('Nenhum usuário cadastrado')
    
    } else {
        res.status(201).json(findUser)    
    }
})


userRouter.get("/getUser/:id", (req,res)=>{

    const { id } = req.params;

    const user = getAllUsers.find(users => users.id == id);

    if (user) {
        return res.status(200).json(user);
        
    } else {
        return res.status(404).json({ message: 'User not found' });
        
    }

})

// userRouter.put('/uptadeUser/:id',(req,res)=>{
//     const { id } = req.params;
//     const { name, email, password, age, gender, sexualOrientation, medicalHistory } = req.body;

//     const userIndex = getAllUsers.findIndex(index => index.id === id);

//     if (userIndex !== -1) {
        
//         getAllUsers[userIndex] = {
//             ...getAllUsers[userIndex],  
//             name, email, password, age, gender, sexualOrientation, medicalHistory };

//             return res.status(200).json({ message: 'User updated successfully', data: getAllUsers[userIndex] });
//         }else{
//             return res.status(404).json({ message: 'User not found' });
//         }

// })




