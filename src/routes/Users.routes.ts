import { CreateUserController } from "@module/useCases/CreateUser/CreateUserController";
import { ListUserController } from "@module/useCases/ListUser/ListUserController";
import { UpdateUserFieldController } from "@module/useCases/UpdateUserField/UpdateUserFieldController";
import { DeleteUserController } from "@module/useCases/DeleteUser/DeleteUserController";
import { SearchUsersByAPIGithubController } from "@module/useCases/SearchUsersByAPIGithub/SearchUsersController";
import { UploadUserImagesController } from "@module/useCases/UploadUserImages/UploadUserImagesController";
import UploadConfig from "@utils/uploadConfig/UploadConfig";
import multer from "multer";
import { Router } from "express";

export const userRoutes = Router();
export const searchUsersByAPIGithubRoute = Router();
export const uploadUserImagesRoute = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const updateUserFieldController = new UpdateUserFieldController();
const deleteUserController = new DeleteUserController();
const searchUsersByAPIGithubController = new SearchUsersByAPIGithubController();
const uploadUserImagesController = new UploadUserImagesController();

const upload = multer(UploadConfig);

userRoutes.post("/", createUserController.handle);
userRoutes.get("/", listUserController.handle);
userRoutes.patch("/", updateUserFieldController.handle);
userRoutes.delete("/", deleteUserController.handle);
searchUsersByAPIGithubRoute.get("/", searchUsersByAPIGithubController.handle);
uploadUserImagesRoute.post("/", upload.array("userImages"), uploadUserImagesController.handle);
