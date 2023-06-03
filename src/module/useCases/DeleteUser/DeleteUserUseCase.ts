import { IUserRepository } from "@module/repositories/implementation-IUserRepository/IUserRepository";
import { AppError } from "@utils/error/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
export class DeleteUserUseCase {

    constructor(@inject("UserRepository") private userRepository: IUserRepository) {}

    async execute(user_id: string): Promise<void> {

        const findUserById = await this.userRepository.findUserById(user_id);

        if(!findUserById) {
            throw new AppError("User not Found !", 404);
        }

        await this.userRepository.deleteUser(user_id);

    }

}