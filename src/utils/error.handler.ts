import { Response } from "express";

const handleHttP = (res: Response, error: string, errorRaw?: any) => {
    res.status(404).send(error);
}

export { handleHttP }
