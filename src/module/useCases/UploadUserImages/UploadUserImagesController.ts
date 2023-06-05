import { Request, Response } from "express";
import { container } from "tsyringe";
import { UploadUserImagesUseCase } from "./UploadUserImagesUseCase";

interface IFiles {
    filename: string
}

export class UploadUserImagesController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { user_id } = request.query;
        const images = request.files as IFiles[]

        const uploadUserImagesUseCase = container.resolve(UploadUserImagesUseCase);

        const images_name = images.map((file) => file.filename);

        await uploadUserImagesUseCase.execute({
            user_id: user_id as string,
            images_name
        });

        return response.status(200).send();

    }

}