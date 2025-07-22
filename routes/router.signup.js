import express from 'express';
import { validateUserFields } from "../middleware/middle.users.js";
import { postUser, getUsers } from "../ctrl/users.ctrl.js";

const router = express.Router();

router.get('/', getUsers);

router.post('/', validateUserFields, postUser);

export default router;