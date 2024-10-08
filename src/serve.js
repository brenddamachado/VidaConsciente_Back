import express from "express";
import cors from "cors";
import { diseaseRouter } from "./routes/router.js";
import { remindersRouter } from "./routes/reminders.routes.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(diseaseRouter);
app.use('/api/reminders', remindersRouter);


app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`);
});

