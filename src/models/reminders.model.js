// src/models/reminders.model.js

import { remindersList } from '../data/remindersList.js'; 

export const addReminder = (text) => {
  const newReminder = {
    id: remindersList.length + 1,
    text,
    dateAdded: new Date(),
  };
  remindersList.push(newReminder);
  return newReminder;
};


export const getAllReminders = () => {
  return remindersList;
};

export const deleteReminder = (id) => {
  const index = remindersList.findIndex(reminder => reminder.id === parseInt(id));
  if (index !== -1) {
    remindersList.splice(index, 1);
    return "Lembrete deletado com sucesso.";
  } else {
    return "Lembrete não encontrado.";
  }
};

export const updateReminder = (id, newText) => {
  const index = remindersList.findIndex(reminder => reminder.id === parseInt(id));
  if (index !== -1) {
    remindersList[index].text = newText;
    return remindersList[index];
  } else {
    return "Lembrete não encontrado.";
  }
};
