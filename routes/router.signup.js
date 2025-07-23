import express from 'express';
import { validateUserFields } from "../middleware/middle.users.js";
import { postSingUp, postSingIn, getUsers } from "../ctrl/users.ctrl.js";

const router = express.Router();

router.get('/', getUsers);

router.post('/signup', validateUserFields, postSingUp);

router.post('/signin', validateUserFields, postSingIn);

export default router;