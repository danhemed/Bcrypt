import { pool } from "../db/connection.mysql.js";
import { hashedPassword } from "./hash.service.js";

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