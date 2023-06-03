import { ListUserUseCase } from "@module/useCases/ListUser/ListUserUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class ListUserController {

    async handle(request: Request, response: Response) {

        const { name, email } = request.body;

        const listUserUseCase = container.resolve(ListUserUseCase);

        const listUser = await listUserUseCase.execute(
            name,
            email
        );

        return response.status(200).json(listUser);
    }

}