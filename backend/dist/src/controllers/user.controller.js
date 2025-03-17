//CRUD Controllers
import User from "../models/user.model.js";
//call all  users
export const getUsers = (req, res) => {
    try {
        const users = User.findAll();
        res.status(200).json(users);
    }
    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};
//get user by id
export const getUserById = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findByPk(userId);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "internal server error" });
    }
};
//create user
export const createUser = async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    try {
        const result = await User.create({
            name: name,
            email: email
        });
        res.status(201).json({
            message: 'User created successfully',
            user: result
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "internal server error" });
    }
};
//update user
export const updateUser = async (req, res, next) => {
    const userId = req.params.userId;
    const updatedName = req.body.name;
    const updatedEmail = req.body.email;
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        await user.update({
            name: updatedName,
            email: updatedEmail
        });
        const result = await user.save();
        res.status(200).json({
            message: 'User updated successfully',
            user: result
        });
    }
    catch (error) {
        res.status(500).json({ message: "internal server error" });
    }
};
//delete user
export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        await user.destroy();
        res.status(200).json({
            message: 'User deleted successfully',
            user: user
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "internal server error" });
    }
};
