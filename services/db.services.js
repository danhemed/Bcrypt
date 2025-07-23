import { pool } from "../db/connection.mysql.js";
import { hashedPassword, isMatch } from "./hash.service.js";

export async function getAllUsers() {
    const [rows] = await pool.query("SELECT * FROM users");
    return rows;
}

export async function signUp(username, password) {
    const hashed = await hashedPassword(password);
    const sql = `INSERT INTO users (username, password_hash) VALUES (?, ?)`;
    const [result] = await pool.query(sql, [username, hashed]);

    return { id: result.insertId, username };
}

export async function signIn(username, password) {
    const users = await getAllUsers();
    const user = users.find(u => u.username === username);
    if (!user) {
        console.log(`user not found!`);
        return null;
    }
    const match = await isMatch(password, user.password_hash);
    if (!match) {
        console.log(`Unauthorized`);
        return false;
    }
    console.log(`Verified`);
    return user;
}