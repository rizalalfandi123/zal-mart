import { NextApiRequest, NextApiResponse } from "next";
import { deleteCpuService, getCpuByIdService, updateCpuService } from "services";
import { ApiHandlerType } from "types";
import { METHOD_NOT_ALLOWED, RESPONSE_METHOD_NOT_ALLOWED } from "utils";

const cpu: ApiHandlerType = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "DELETE":
      return deleteCpuService(req, res);
    case "GET":
      return getCpuByIdService(req, res);
    case "PATCH":
      return updateCpuService(req, res);
    default:
      return res.status(METHOD_NOT_ALLOWED).send(RESPONSE_METHOD_NOT_ALLOWED);
  }
};

export default cpu;
