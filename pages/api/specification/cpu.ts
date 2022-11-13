import { NextApiRequest, NextApiResponse } from "next";
import { createCpuService, getCpuService } from "services";
import { ApiHandlerType } from "types";

const cpu: ApiHandlerType = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST":
      return createCpuService(req, res);
    case "GET":
      return getCpuService(req, res);
  }
};

export default cpu;
