import { CreateUserController } from "@module/useCases/CreateUser/CreateUserController";
import { ListUserController } from "@module/useCases/ListUser/ListUserController";
import { UpdateUserFieldController } from "@module/useCases/UpdateUserField/UpdateUserFieldController";
import { DeleteUserController } from "@module/useCases/DeleteUser/DeleteUserController";
import { SearchUsersByAPIGithubController } from "@module/useCases/SearchUsersByAPIGithub/SearchUsersController";
import { Router } from "express";

export const createUserRoute = Router();
export const listUserRoute = Router();
export const updateUserFieldRoute = Router();
export const deleteUserRoute = Router();
export const SearchUsersByAPIGithubRoute = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const updateUserFieldController = new UpdateUserFieldController();
const deleteUserController = new DeleteUserController();
const searchUsersByAPIGithubController = new SearchUsersByAPIGithubController();

createUserRoute.post("/", createUserController.handle);
listUserRoute.get("/", listUserController.handle);
updateUserFieldRoute.patch("/", updateUserFieldController.handle);
deleteUserRoute.delete("/", deleteUserController.handle);
SearchUsersByAPIGithubRoute.get("/", searchUsersByAPIGithubController.handle);
