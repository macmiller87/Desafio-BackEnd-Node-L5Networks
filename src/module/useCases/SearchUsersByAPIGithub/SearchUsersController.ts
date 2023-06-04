import axios from "axios";
import { Request, Response } from "express";
import { AppError } from "@utils/error/AppError";

export class SearchUsersByAPIGithubController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { username } = request.query;

        const respSearch = await axios.get(`https://api.github.com/users/${username}`).then((response) => {
            return response.data;

        }).catch((error) => {
            throw new AppError("User Profile Not Found", 404);
        })

        return response.status(200).json(respSearch);
    }

}