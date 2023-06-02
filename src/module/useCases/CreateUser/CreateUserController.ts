import { CreateUserUseCase } from "@module/useCases/CreateUser/CreateUserUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class CreateUserController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { name, email, password, login } = request.body;

        const createUserUseCase = container.resolve(CreateUserUseCase);

        const user = await createUserUseCase.execute({
            name,
            email,
            password,
            login
        });

        return response.status(200).json(user);
    }
    
}