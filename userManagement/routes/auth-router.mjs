import express from "express";
import controllers from "../controllers/auth-controller.mjs";

const authRouter = express.Router();

authRouter.post("/adduser", controllers.userReg);
authRouter.post("/signup", controllers.adminReg);
authRouter.post("/login", controllers.loginAuth);
authRouter.get("/dashboard", controllers.getUser);

export default authRouter;
