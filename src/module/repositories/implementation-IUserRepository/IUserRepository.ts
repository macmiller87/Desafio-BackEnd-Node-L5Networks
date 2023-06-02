import { CreateUserDTO } from "@module/dtos/UserDTO";
import { User } from "@prisma/client";

export interface IUserRepository {
    create({ name, email, password, login  }: CreateUserDTO): Promise<User>;
    findUserByLogin(login: string): Promise<User | null>;
    findByUserName(name: string): Promise<User | null>;
}