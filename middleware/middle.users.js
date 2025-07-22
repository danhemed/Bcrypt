export function validateUserFields(req, res, next) {
    const { username, password_hash } = req.body;
    if (!username || !password_hash) {
        return res.status(400).json({error: "missing fields"});
    }
    next();
}