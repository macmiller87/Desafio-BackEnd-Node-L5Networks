import { UpdateUserFieldUseCase } from "@module/useCases/UpdateUserField/UpdateUserFieldUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class UpdateUserFieldController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { user_id } = request.query;
        const { email } = request.body;

        const updateUserFieldUseCase = container.resolve(UpdateUserFieldUseCase);

        const updateUserField = await updateUserFieldUseCase.execute(
            user_id as string,
            email
        );

        return response.status(200).json(updateUserField);
    }

}