import axios from "axios";
import { torreQuery } from "../interface/torre";

const userByNameService = async (name: string) => {
  const torreResponse = await axios.get(`https://torre.bio/api/bios/${name}`);
  const user = torreResponse.data;
  if (!user) throw new Error("User not found");
  return user;
};

const usersByStreamsService = async ({ query, limit }: torreQuery) => {
  const torreResponse = await axios.post(
    "https://torre.ai/api/entities/_searchStream",
    { query, limit }
  );
  const { data } = torreResponse;
  if (!data) throw new Error("Users not found");

  const cleanData = data.split("\n").filter((line: any) => line.trim() !== "");

  const users = cleanData.map((element: any) => JSON.parse(element));
  return users;
};

export { userByNameService, usersByStreamsService };
