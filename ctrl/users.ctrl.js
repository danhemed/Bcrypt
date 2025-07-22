import { getAllUsers, signUp } from "../services/db.services.js";

export const getUsers = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const postUser = async (req, res) => {
    const { username, password_hash } = req.body;

    try {
        await signUp(username, password_hash)

        res.status(201).json({ message: `User created successfully` });
    } catch (err) {
        console.error('Error in postUser:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}
