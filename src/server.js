import express from "express";
import cors from "cors";
import { diseaseRouter } from "./routes/disease.routes.js";
import { userRouter } from "./routes/user.routes.js";
import { casesRouter } from "./routes/case.routes.js";
import router from "./routes/local.routes.js";
import { remindersRouter } from "./routes/reminders.routes.js";
import { localRouter } from "./routes/local.routes.js";

const app = express();
const PORT = process.env.PORT || 3000; 

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Testing and Treatment Locations API!');
});

app.use(router);
app.use('/api/diseases', diseaseRouter);  
app.use('/api/users', userRouter);        // Rota específica para usuários
app.use('/api/cases', casesRouter);       // Rota específica para casos
app.use('/api/reminders', remindersRouter); // Rota específica para lembretes
app.use('/api/locations', localRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

