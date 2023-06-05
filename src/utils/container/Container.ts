import { UserRepository } from "@module/repositories/UserRepository";
import { IUserRepository } from "@module/repositories/implementation-IUserRepository/IUserRepository";
import { container } from "tsyringe";

container.registerSingleton<IUserRepository>(
    "UserRepository",
    UserRepository
);
