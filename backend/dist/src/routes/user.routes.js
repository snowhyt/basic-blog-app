import { getUsers, getUserById, createUser, updateUser, deleteUser } from "../controllers/user.controller.js";
import { Router } from "express";
const router = Router();
//CRUD routes /users
router.get('/', getUsers); // /users
router.get('/:userId', getUserById); // /users/:userId
router.post('/', createUser); // /users
router.put('/:userId', updateUser); // /users/:userId
router.delete('/:userId', deleteUser); // /users/:userId
export default router;
