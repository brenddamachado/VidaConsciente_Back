
import { addReminder, getAllReminders, deleteReminder, updateReminder } from "../models/reminders.model.js";


export const createReminder = (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ message: "O lembrete não pode estar vazio." });
  }
  const newReminder = addReminder(text);
  res.status(201).json(newReminder);
};

export const fetchReminders = (req, res) => {
  const reminders = getAllReminders();
  
  if (reminders.length === 0) {
    return res.status(200).json({
      message: "Nenhum lembrete encontrado.",
      data: []
    });
  }
  
  res.status(200).json({
    message: "Lembretes recuperados com sucesso.",
    data: reminders
  });
};


export const removeReminder = (req, res) => {
  const { id } = req.params;
  const result = deleteReminder(id);
  if (result === "Lembrete deletado com sucesso.") {
    res.status(200).json({ message: result });
  } else {
    res.status(404).json({ message: result });
  }
};


export const editReminder = (req, res) => {
  const { id } = req.params;
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ message: "O novo texto não pode estar vazio." });
  }

  const updatedReminder = updateReminder(id, text);
  if (updatedReminder === "Lembrete não encontrado.") {
    return res.status(404).json({ message: updatedReminder });
  }

  res.status(200).json({
    message: "Lembrete atualizado com sucesso.",
    data: updatedReminder
  });
};
