import { NextApiRequest, NextApiResponse } from "next";

export type ApiHandlerType = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
