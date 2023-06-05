import { IUserRepository } from "@module/repositories/implementation-IUserRepository/IUserRepository";
import { CreateUserDTO } from "@module/dtos/UserDTO";
import { prismaService } from "@database/PrismaService";
import { User, UserImage } from "@prisma/client";

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

    async findUserById(user_id: string): Promise<User | null> {
        const findUserById = await prismaService.user.findFirst({
            where: {
                user_id: user_id
            }
        })

        return findUserById;
    }

    async findUserByName(name: string): Promise<User | null> {
        const findUserByName = await prismaService.user.findFirst({
            where: {
                name: name
            }
        });

        return findUserByName;
    }

    async findUserByEmail(email: string): Promise<User | null> {
        const findUserByEmail = await prismaService.user.findFirst({
            where: {
                email: email
            }
        });

        return findUserByEmail;
    }

    async listUser(name: string, email: string): Promise<User |null> {
        const listUser = await prismaService.user.findFirst({
            where: {
                name: name,
                email: email
            }
        });

        return listUser;
    }

    async updateUserField(user_id: string, email: string): Promise<User | null> {
        const updateUserField = await prismaService.user.update({
            where: {
                user_id: user_id
            },
            data: {
                email: email
            }
        })

        return updateUserField;
    }

    async deleteUser(user_id: string): Promise<void> {
        await prismaService.user.delete({
            where: {
                user_id: user_id
            }
        });
    } 

    async uploadUserImages(user_id: string, image_name: string): Promise<UserImage> {
        const userImage = await prismaService.userImage.create({
            data: {
                user_id,
                image_name
            }
        });

        return userImage;
    }
}