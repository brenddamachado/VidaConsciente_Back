import express from "express";
import cors from "cors";
import { diseaseRouter } from "./routes/router.js";
import { remindersRouter } from "./routes/reminders.routes.js";
import { userRouter } from "./routes/user.routes.js";



const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Testing and Treatment Locations API!');
});


app.use(diseaseRouter);
app.use(userRouter);
app.use('/api/reminders', remindersRouter);


app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`);
});

