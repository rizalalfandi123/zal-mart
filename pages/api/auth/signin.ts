import { NextApiRequest, NextApiResponse } from "next";
import { signupService } from "services";
import { ApiHandlerType } from "types";
import { METHOD_NOT_ALLOWED, RESPONSE_METHOD_NOT_ALLOWED } from "utils";

const signin: ApiHandlerType = async (req: NextApiRequest, res: NextApiResponse) => {
  // TODO: return error when http method not POST
  if (req.method !== "POST") return res.status(METHOD_NOT_ALLOWED).send(RESPONSE_METHOD_NOT_ALLOWED);

  return signupService(req, res);
};

export default signin;
