import { NextApiRequest, NextApiResponse } from "next";
import { signupService } from "services";
import { ApiHandlerType } from "types";
import { METHOD_NOT_ALLOWED, RESPONSE_METHOD_NOT_ALLOWED } from "utils";

const signup: ApiHandlerType = async (req: NextApiRequest, res: NextApiResponse) => {
  // TODO: return error when http method not POST
  return res.status(200).send({ test: "ok" });
};

export default signup;
