import { Router } from "express";

import { createUser, getUser , updateUser, deleteUser } from "../controllers/user.controller.js";
 
export const userRouter = Router();


userRouter.post("/createUsers", async (req,res)=>{
    const { name, email, password, age, sexualOrientation, medicalHistory } = req.body;

    try {
        
        const newUser = await createUser(name, email, password, age, sexualOrientation, medicalHistory);
        return res.status(201).json({message: 'User created sucessfuly', data: newUser})
    
    } catch (error) {
        return res.status(500).json({message:'Failed to create user!', error: error.message})
    }
})

userRouter.get("/getAllUsers", (req,res)=>{
    const findUser = getUser()
    return res.status(201).json(findUser)
})