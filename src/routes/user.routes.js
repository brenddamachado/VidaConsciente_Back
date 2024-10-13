// src/routes/user.routes.js
import { Router } from "express";
import { registerUser, getAllUsers, getUserById, updateUser, deleteUser, loginUser,    } from "../controllers/user.controller.js";

export const userRouter = Router();

userRouter.post("/registerUser", registerUser);


userRouter.get("/getAllUsers", getAllUsers);


userRouter.get("/getUser/:id", getUserById);

userRouter.put("/updateUser/:id", updateUser);

userRouter.delete("/deleteUser/:id", deleteUser);
userRouter.post("/login", loginUser);

