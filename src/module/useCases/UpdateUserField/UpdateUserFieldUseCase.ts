import { IUserRepository } from "@module/repositories/implementation-IUserRepository/IUserRepository";
import { AppError } from "@utils/error/AppError";
import { User } from "@prisma/client";
import { inject, injectable } from "tsyringe";

@injectable()
export class UpdateUserFieldUseCase {

    constructor(@inject("UserRepository") private userRepository: IUserRepository) {}

    async execute(user_id: string, email: string): Promise<User | null> {

        const userById = await this.userRepository.findUserById(user_id);
        const findUserByEmail = await this.userRepository.findUserByEmail(email);

        if(!userById) {
            throw new AppError("User Not Found !", 404);

        }else if(email === "") {
            throw new AppError("Null Data is Not Allowed, Please fill the Email !", 401);

        }else {

            let regexMail = /^\S+@\S+\.\S+$/;

            if(!regexMail.test(email)) {
                throw new AppError("Please Put a Valid Email !", 401);
            }

            const updateUserField = await this.userRepository.updateUserField(
                user_id,
                email
            );

            return updateUserField;
        }

    }

}