import { remindersList } from "../data/remindersList.js"; 

export const addReminder = (text) => {
  const newReminder = {
    id: remindersList.length + 1,
    text: text
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

export const updateReminder = (id, text) => {
  const reminder = remindersList.find(reminder => reminder.id === parseInt(id));
  if (reminder) {
    reminder.text = text;
    return reminder;
  }
  return null;
};
