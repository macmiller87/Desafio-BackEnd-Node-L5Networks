import { userRoutes, searchUsersByAPIGithubRoute, uploadUserImagesRoute } from "@routes/Users.routes";
import { Router } from "express";

export const routes = Router();

routes.use("/createUser", userRoutes);
routes.use("/listUser", userRoutes);
routes.use("/updateUserField/", userRoutes);
routes.use("/deleteUser/", userRoutes);
routes.use("/SearchUsersByAPIGithub/", searchUsersByAPIGithubRoute);
routes.use("/userUpload/", uploadUserImagesRoute);