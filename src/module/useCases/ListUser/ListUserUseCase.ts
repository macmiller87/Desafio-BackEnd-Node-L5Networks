import { IUserRepository } from "@module/repositories/implementation-IUserRepository/IUserRepository";
import { AppError } from "@utils/error/AppError";
import { User } from "@prisma/client";
import { inject, injectable } from "tsyringe";
@injectable()
export class ListUserUseCase {

    constructor(@inject("UserRepository") private userRepository: IUserRepository) {}

    async execute(name: string, email: string): Promise<User | null |undefined> {

        const findUserByName = await this.userRepository.findUserByName(name);
        const findUserByEmail = await this.userRepository.findUserByEmail(email);

        if(name === "" || email === "") {
            throw new AppError("Null Data is Not Allowed, Please fill in All Datas !", 401);

        }else {

            if(!findUserByName) {
                throw new AppError("User Name Not Found or Incorrect !", 404);
    
            }else if(!findUserByEmail) {
                throw new AppError("User Email Not Found or Incorrect !", 404);

            }else {

                const listUser = await this.userRepository.listUser(
                    name,
                    email
                )
    
                return listUser;
            }

        }
    }

}