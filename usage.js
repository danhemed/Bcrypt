import bcrypt from 'bcrypt';

const password = 'mySecret123';

const hashedPassword = await bcrypt.hash(password, 10);
console.log(`hashed: ${hashedPassword}`);

const isMatch = await bcrypt.compare(password, hashedPassword);
console.log(`Match: ${isMatch}`);