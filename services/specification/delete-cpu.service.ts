import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

import { BAD_REQUEST, CREATED, INTERNAL_SERVER_ERROR, RESPONSE_INTERNAL_SERVER_ERROR } from "utils";

const prisma = new PrismaClient();

export const deleteCpuService = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const id = req.query["id"];

    if (typeof id !== "string") {
      return res.status(BAD_REQUEST).json({
        status: "error",
        message: "Invalid cpu id",
        data: null,
      });
    }

    const cpu = await prisma.cpu.delete({
      where: {
        id,
      },
    });

    res.status(CREATED).send({
      status: "success",
      message: "Success to delete cpu data",
      data: cpu,
    });
  } catch (error) {
    console.error(error);

    // TODO: Default error handling
    res.status(INTERNAL_SERVER_ERROR).send(RESPONSE_INTERNAL_SERVER_ERROR);
  }
};
