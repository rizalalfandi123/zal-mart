import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { ZodError } from "zod";

import { cpuSchema, CpuType } from "schemas";
import { BAD_REQUEST, CREATED, INTERNAL_SERVER_ERROR, RESPONSE_INTERNAL_SERVER_ERROR } from "utils";

const prisma = new PrismaClient();

export const createCpuService = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data: CpuType = req.body;

    // TODO: Validation
    await cpuSchema.parseAsync(data);

    const cpu = await prisma.cpu.create({
      data,
    });

    res.status(CREATED).send({
      status: "success",
      message: `${cpu.name} Created`,
      data: cpu,
    });
  } catch (error) {
    console.error(error);

    // TODO: Handling error validation
    if (error instanceof ZodError<CpuType>) {
      const errorData = error.issues.map((issu) => ({ message: issu.message, field: issu.path[0] }));

      res.status(BAD_REQUEST).send({
        status: "error",
        message: "Failed to create cpu data",
        error: errorData,
      });
    }

    // TODO: Default error handling
    res.status(INTERNAL_SERVER_ERROR).send(RESPONSE_INTERNAL_SERVER_ERROR);
  }
};
