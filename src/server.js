import express from "express";
import cors from "cors";
import { diseaseRouter } from "./routes/disease.routes.js";
import { userRouter } from "./routes/user.routes.js";
import { casesRouter } from "./routes/case.routes.js";
import router from "./routes/local.routes.js";
import { remindersRouter } from "./routes/reminders.routes.js";



const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Testing and Treatment Locations API!');
});

app.use(router);

app.get('/', (req, res) => {
    res.send('Welcome to the Testing and Treatment Locations API!');
});


app.use(diseaseRouter);
app.use(userRouter);
app.use(casesRouter); 
app.use(userRouter);
// app.use('/api/reminders', remindersRouter);
app.use(remindersRouter)


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});