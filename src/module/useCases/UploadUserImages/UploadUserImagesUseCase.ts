import { IUserRepository } from "@module/repositories/implementation-IUserRepository/IUserRepository";
import { AppError } from "@utils/error/AppError";
import { inject, injectable } from "tsyringe";

export interface IRequest {
    user_id: string;
    images_name: string[];
}

@injectable()
export class UploadUserImagesUseCase {

    constructor(
        @inject("UserRepository") private userReposytory: IUserRepository,
    ) { }

    async execute({ user_id, images_name }: IRequest): Promise<void> {

        const findUserById = await this.userReposytory.findUserById(user_id);

        if (!findUserById) {
            throw new AppError("User Not Found", 404);

        }else {
            images_name.map(async (image) => {
                await this.userReposytory.uploadUserImages(user_id, image);
            });
        }
    }

}