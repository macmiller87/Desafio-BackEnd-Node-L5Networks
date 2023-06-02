import { container } from "tsyringe";
import { UserRepository } from "@module/repositories/UserRepository";
import { IUserRepository } from "@module/repositories/implementation-IUserRepository/IUserRepository";

container.registerSingleton<IUserRepository>(
    "UserRepository",
    UserRepository
);