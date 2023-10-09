import express from "express";
import UserManager from "../dao/UserManager.js";

import {  passportCall, authorization } from "../../utils.js";
import UserController from "../controllers/userController.js";
import AuthController from "../controllers/authController.js";



const router = express.Router();

const userController = new UserController();
const authController = new AuthController();

router.post("/login", (req, res) => authController.login(req, res));

router.post("/register", userController.register.bind(userController));

router.get("/restore", userController.restorePassword.bind(userController));




router.post("/logout", (req, res) => authController.logout(req, res));

router.get("/current", passportCall("jwt"), authorization("user"), (req, res) => {
  console.log(req.cookies); 
  userController.currentUser(req, res);
});

export default router;
