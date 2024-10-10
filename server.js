import express from 'express';

import {casesRouter} from "./src/routes/router.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(casesRouter); 

app.listen(port, () =>{
    console.log(`http://localhost:${port}`)
});
