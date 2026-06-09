import { getUser, createUser, editUser ,deleteUser,name } from "./login.controller.js";
import express from "express";

const router = express.Router();

router.get("/get", getUser);
router.post("/post", createUser);
router.put("/edit/:id", editUser);
router.delete("/delete/:id", deleteUser);
router.get("/get/name", name);

export default router;
