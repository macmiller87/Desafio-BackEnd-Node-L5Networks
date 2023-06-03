import { Router } from "express";
import { createUserRoute, deleteUserRoute, listUserRoute, updateUserFieldRoute } from "@routes/Users.routes";

export const routes = Router();

routes.use("/createUser", createUserRoute);
routes.use("/listUser", listUserRoute);
routes.use("/updateUserField/", updateUserFieldRoute);
routes.use("/deleteUser/", deleteUserRoute);