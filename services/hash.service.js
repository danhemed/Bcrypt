import bcrypt from 'bcrypt';

export async function hashedPassword(password) {
    return bcrypt.hash(password, 10);
}

export async function isMatch(password, hashedPassword) {
    return bcrypt.compare(password, hashedPassword);
}
