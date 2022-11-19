import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

import { convertQuery, CREATED, INTERNAL_SERVER_ERROR, RESPONSE_INTERNAL_SERVER_ERROR } from "utils";

import type { Cpu } from "@prisma/client";

const prisma = new PrismaClient();

export const getCpuService = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = convertQuery<Cpu>(req.url);
  try {
    const cpu = await prisma.cpu.findMany({
      ...query.pagination,
      where: query.filter,
      orderBy: query.sort,
    });

    res.status(CREATED).send({
      status: "success",
      message: "Success to get data cpu",
      data: cpu,
    });
  } catch (error) {
    console.error(error);

    // TODO: Default error handling
    res.status(INTERNAL_SERVER_ERROR).send(RESPONSE_INTERNAL_SERVER_ERROR);
  }
};
