import { CreateUserController } from "@module/useCases/CreateUser/CreateUserController";
import { Router } from "express";

export const CreateUserRoute = Router();

const createUserController = new CreateUserController();

CreateUserRoute.post("/", createUserController.handle);
