import { Router } from "express";
import { createUserRoute, listUserRoute, updateUserFieldRoute, deleteUserRoute, SearchUsersByAPIGithubRoute } from "@routes/Users.routes";

export const routes = Router();

routes.use("/createUser", createUserRoute);
routes.use("/listUser", listUserRoute);
routes.use("/updateUserField/", updateUserFieldRoute);
routes.use("/deleteUser/", deleteUserRoute);
routes.use("/SearchUsersByAPIGithub/", SearchUsersByAPIGithubRoute);