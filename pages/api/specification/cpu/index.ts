import { NextApiRequest, NextApiResponse } from "next";
import { createCpuService, getCpuService } from "services";
import { ApiHandlerType } from "types";
import { METHOD_NOT_ALLOWED, RESPONSE_METHOD_NOT_ALLOWED } from "utils";

const cpu: ApiHandlerType = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST":
      return createCpuService(req, res);
    case "GET":
      return getCpuService(req, res);
    default:
      return res.status(METHOD_NOT_ALLOWED).send(RESPONSE_METHOD_NOT_ALLOWED);
  }
};

export default cpu;
