import express from "express";
import cors from "cors";
import { userRouter } from "./src/routes/user.routes.js";

const app = express();
const port = 3000

app.use(express.json());
app.use(cors())
app.use(userRouter)

app.listen(port,(req,res)=>{
    console.log(`Servidor rodando na http://localhost:${port}`)
})