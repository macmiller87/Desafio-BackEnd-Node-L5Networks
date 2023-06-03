import { createUserRoute, listUserRoute } from "@routes/Users.routes";
import { Router } from "express";

export const routes = Router();

routes.use("/createUser", createUserRoute);
routes.use("/listUser", listUserRoute);