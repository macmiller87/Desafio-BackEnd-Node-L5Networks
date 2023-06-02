import "reflect-metadata";
import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import "@utils/container/Container";
import { routes } from "@routes/Index";
import { AppError } from "@utils/error/AppError";

export const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.use((erro: Error, request: Request, response: Response, next: NextFunction) => {

    if(erro instanceof AppError) {
        return response.status(erro.statusCode).json({ message: erro.message });
    }

    return response.status(500).json({
        status: "error",
        message: `Internal Server Error ${erro.message}`
    });

});