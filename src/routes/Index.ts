import { Router } from "express";
import { CreateUserRoute } from "@routes/Users.routes";

export const routes = Router();

routes.use("/createUser", CreateUserRoute);