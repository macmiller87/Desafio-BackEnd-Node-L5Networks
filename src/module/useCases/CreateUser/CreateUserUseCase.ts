import { IUserRepository } from "@module/repositories/implementation-IUserRepository/IUserRepository";
import { CreateUserDTO } from "@module/dtos/UserDTO";
import { AppError } from "@utils/error/AppError";
import { inject, injectable, } from "tsyringe";
import { User } from "@prisma/client";
import { hash } from "bcryptjs";

@injectable()
export class CreateUserUseCase {

    constructor(@inject("UserRepository") private userRepository: IUserRepository) { }

    async execute({ name, email, password, login  }: CreateUserDTO): Promise<User> {

        const findUserByLogin = await this.userRepository.findUserByLogin(login);
        const findUserByName = await this.userRepository.findByUserName(name);

        if(name != "" && email != "" && password != "" && login != "") {

            if(findUserByLogin) {
                throw new AppError("Login is Already Exists/in use, Please Change !", 401);

            }else if(findUserByName) {
                throw new AppError("Name is Already Exists/in use, Please Change !", 401);
            }

            let regexMail = /^\S+@\S+\.\S+$/;

            if(!regexMail.test(email)) {
                throw new AppError("Please Put a Valid Email !", 401);
            }

            const passwordHash = await hash(password, 8);

            const user = await this.userRepository.create({
                name,
                email,
                password: passwordHash,
                login
            });

            return user;

        }else {
            throw new AppError("Null Data is Not Allowed, Please fill in All Datas !", 401);
        }

    }

}