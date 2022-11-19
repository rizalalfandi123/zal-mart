import { NextApiRequest, NextApiResponse } from "next";

export type ApiHandlerType = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

export type ApiResponseType<T> = {
  message: string;
  status: "success" | "error";
  data: T;
};

export type BrandCardItemType = {
  name: string;
  imageUrl: string;
};

