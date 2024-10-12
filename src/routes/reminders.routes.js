

import { Router } from "express";
import { createReminder, fetchReminders, removeReminder, editReminder } from "../controllers/reminders.controller.js";

const remindersRouter = Router();


remindersRouter.post("/addReminder", createReminder);

remindersRouter.get("/getReminders", fetchReminders);


remindersRouter.put("/editReminder/:id", editReminder);

remindersRouter.delete("/deleteReminder/:id", removeReminder);

export { remindersRouter };

