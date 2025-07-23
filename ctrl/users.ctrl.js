import { getAllUsers, signUp, signIn } from "../services/db.services.js";

export const getUsers = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const postSingUp = async (req, res) => {
    const { username, password_hash } = req.body;
    try {
        await signUp(username, password_hash)

        res.status(201).json({ message: `User created successfully` });
    } catch (err) {
        console.error('Error in postUser:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const postSingIn = async (req, res) => {
    const { username, password_hash } = req.body;
    try {
        const user = await signIn(username, password_hash);
        if (user === null) {
            res.status(404).json({message: `User is null`});
        }
        if (user === false) {
            res.status(401).json({message: `Password isn't correct`});
        }
        res.status(201).json({ message: `User sing in successfully` });
    } catch (err) {
        console.error('Error in postUser:', err);
        if (!res.headersSent) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}
