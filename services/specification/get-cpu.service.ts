import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Cpu } from "@prisma/client";
import queryString from "query-string";

import { CREATED, INTERNAL_SERVER_ERROR, RESPONSE_INTERNAL_SERVER_ERROR } from "utils";

const prisma = new PrismaClient();

export const getCpuService = async (req: NextApiRequest, res: NextApiResponse) => {
  const parseQuery = queryString.extract(req.url || "");
  console.log({ req: req.query, parseQuery });

  try {
    console.log({});
    const cpuData = await prisma.cpu.findMany({});

    res.status(CREATED).send({
      status: "success",
      message: "Success to get data cpu",
      data: cpuData,
    });
  } catch (error) {
    console.error(error);

    // TODO: Default error handling
    res.status(INTERNAL_SERVER_ERROR).send(RESPONSE_INTERNAL_SERVER_ERROR);
  }
};
