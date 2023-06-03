import { CreateUserDTO } from "@module/dtos/UserDTO";
import { User } from "@prisma/client";

export interface IUserRepository {
    create({ name, email, password, login  }: CreateUserDTO): Promise<User>;
    findUserByLogin(login: string): Promise<User | null>;
    findUserByName(name: string): Promise<User | null>;
    findUserByEmail(email: string): Promise<User | null>;
    findUserById(user_id: string): Promise<User| null>;
    listUser(name: string, email: string): Promise<User | null>;
    updateUserField(user_id: string, email: string): Promise<User | null>;
    deleteUser(user_id: string): Promise<void>;
}