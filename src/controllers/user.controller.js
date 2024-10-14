
import { users } from '../data/user.js';
import { v4 as uuidv4 } from 'uuid';


export const registerUser = (req, res) => {
    console.log('Dados recebidos:', req.body);

    const { name, email, password, birthDate, gender, phone, address, city, state, cep } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "Campos obrigatórios não preenchidos" });
    }


    const newUser = { 
        id: uuidv4(),
        name, 
        email, 
        password, 
        birthDate, 
        gender, 
        phone, 
        address, 
        city, 
        state, 
        cep 
    };

    users.push(newUser);

    return res.status(201).json({ message: "Usuário criado com sucesso!", data: newUser });
};


export const getAllUsers = (req, res) => {
    if (users.length === 0) {
        return res.status(404).json({ message: 'Nenhum usuário encontrado' });
    }
    return res.status(200).json(users);
};


export const getUserById = (req, res) => {
    const { id } = req.params;  
    console.log(`Buscando usuário com ID: ${id}`);
    
    const user = users.find(user => user.id === id);  

    if (user) {
        return res.status(200).json(user); 
    } else {
        return res.status(404).json({ message: 'Usuário não encontrado' });  
    }
};



export const updateUser = (req, res) => {
    const { id } = req.params; 
    const { name, email, city } = req.body; 

    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex !== -1) {
        
        users[userIndex] = {
            ...users[userIndex],  
            name,  
            email,  
            city  
        };

        return res.status(200).json({ message: 'Usuário atualizado com sucesso', data: users[userIndex] });
    } else {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
    }
};


export const deleteUser = (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex !== -1) {
        const deletedUser = users.splice(userIndex, 1);
        return res.status(200).json({ message: 'Usuário deletado com sucesso', data: deletedUser });
    } else {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
    }
};

export const loginUser = (req, res) => {
    const { email, password } = req.body;


    const user = users.find(user => user.email === email && user.password === password);

    if (!user) {
        return res.status(401).json({ message: 'E-mail ou senha incorretos' });
    }

    return res.status(200).json({ message: 'Login bem-sucedido!', user });
};
