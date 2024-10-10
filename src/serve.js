import express from "express";
import cors from "cors";
import { diseaseRouter } from "./routes/disease.routes.js";
import { userRouter } from "./routes/user.routes.js";
import { casesRouter } from "./routes/router.js";
import router from "./routes/local.router.js";
import { diseaseRouter } from "./routes/router.js";
import { remindersRouter } from "./routes/reminders.routes.js";
import { userRouter } from "./routes/user.routes.js";



const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Testing and Treatment Locations API!');
});

// app.use('/api/locations', localRoutes);
// app.use(localR)
app.use(router);

app.get('/', (req, res) => {
    res.send('Welcome to the Testing and Treatment Locations API!');
});


app.use(diseaseRouter);
app.use(userRouter);
app.use(casesRouter); 
app.use(userRouter);
app.use('/api/reminders', remindersRouter);


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});