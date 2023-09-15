import { Request, Response } from "express";
import { userByNameService, usersByStreamsService } from "../service/torre";
import { handleHttP } from "../utils/error.handler";

const getUserByName = async ({ params }: Request, res: Response) => {
  try {
    const { name } = params;
    const user = await userByNameService(name);
    res.send(user);
  } catch (error) {
    handleHttP(res, `${error}`);
  }
};

const getUsersByStreams = async ({ body }: Request, res: Response) => {
  try {
    const users = await usersByStreamsService(body);
    res.send(users);
  } catch (error) {
    handleHttP(res, `${error}`);
  }
};

export { getUserByName, getUsersByStreams };
