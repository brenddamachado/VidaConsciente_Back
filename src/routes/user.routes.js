import { Router } from "express";

import { createUser, getUser, updateUser, deleteUser, getAllUsers } from "../controllers/user.controller.js";
 
export const userRouter = Router();


userRouter.post("/createUser", async (req,res)=>{
    const { name, email, password, age, gender,sexualOrientation, medicalHistory } = req.body;

    try {
        const newUser = await createUser(name, email, password, age, gender, sexualOrientation, medicalHistory);
        return res.status(201).json({message: 'Usuário criado com sucesso', data: newUser})
    
    } catch (error) {
        return res.status(500).json({message:'Falha ao criar um usuário!', error: error.message})
    }
})

userRouter.get("/getAllUsers", async (req, res) => {
    try {
        const findUser = await getUser();
        if (findUser.length < 1) {
            return res.status(404).json({ message: 'Nenhum usuário cadastrado' });
        } else {
            return res.status(200).json(findUser);
        }
    } catch (error) {
        return res.status(500).json({ message: 'Falha ao buscar usuários', error: error.message });
    }
});

userRouter.get("/getUser/:id", (req, res) => {
    const { id } = req.params;
    const user = getAllUsers.find(user => user.id == id);

    if (user) {
        return res.status(200).json(user);
    } else {
        return res.status(404).json({ message: 'Falha ao buscar usuários' });
    }
});



userRouter.put("/uptadeUser/:id",(req,res)=>{
    const { id } = req.params;
    const updatedData = req.body;

    try {
        const updatedUser = updateUser(id, updatedData);
        return res.status(200).json({ message: 'Usuário atualizado com sucesso!', data: updatedUser });
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }

})


userRouter.delete("/deleteUser/:id",(req,res)=>{

    const { id } = req.params;
    
    try {
        const deletedUser = deleteUser(id);
        return res.status(200).json({ message: 'Usuário deletado com sucesso!', data: deletedUser });
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }


})



