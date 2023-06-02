import { IUserRepository } from "@module/repositories/implementation-IUserRepository/IUserRepository";
import { CreateUserDTO } from "@module/dtos/UserDTO";
import { prismaService } from "@database/PrismaService";
import { User } from "@prisma/client";

export class UserRepository implements IUserRepository {

    async create(data: CreateUserDTO): Promise<User> {
        const user = await prismaService.user.create({
            data: data
        });

        return user;
    }

    async findUserByLogin(login: string): Promise<User | null> {
        const findUserByLogin = await prismaService.user.findUnique({
            where: {
                login: login
            }
        });

        return findUserByLogin;
    }

    async findByUserName(name: string): Promise<User | null> {
        const findByUserName = await prismaService.user.findFirst({
            where: {
                name: name
            }
        });

        return findByUserName;
    }
}