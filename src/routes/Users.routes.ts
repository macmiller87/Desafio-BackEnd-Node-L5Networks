import { CreateUserController } from "@module/useCases/CreateUser/CreateUserController";
import { ListUserController } from "@module/useCases/ListUser/ListUserController";
import { Router } from "express";

export const createUserRoute = Router();
export const listUserRoute = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();

createUserRoute.post("/", createUserController.handle);
listUserRoute.get("/", listUserController.handle);
