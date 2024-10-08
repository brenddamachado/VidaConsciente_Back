// src/routes/reminders.router.js

import { Router } from "express";
import { createReminder, fetchReminders, removeReminder, editReminder } from "../controllers/reminders.controller.js";

const remindersRouter = Router();


remindersRouter.post("/addReminder", createReminder);


remindersRouter.get("/getReminders", fetchReminders);


remindersRouter.delete("/deleteReminder/:id", removeReminder);


remindersRouter.patch("/editReminder/:id", editReminder);

export { remindersRouter };
