import { NextApiRequest, NextApiResponse } from "next";
import { Prisma, PrismaClient } from "@prisma/client";
import { z, ZodError } from "zod";
import bcrypt from "bcrypt";

import { ApiHandlerType } from "types";
import { signinSchema } from "schemas";
import {
  BAD_REQUEST,
  CREATED,
  INTERNAL_SERVER_ERROR,
  RESPONSE_INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  UNAUTHORIZED,
} from "utils";

type SigninType = z.infer<typeof signinSchema>;

const prisma = new PrismaClient();

export const signinService: ApiHandlerType = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data: SigninType = req.body;

    // TODO: Validation
    await signinSchema.parseAsync(data);

    // TODO: find user in database
    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    // TODO: if user not exist
    if (!user) {
      return res.status(NOT_FOUND).send({
        status: "error",
        message: "Failed to signin",
        error: "User not found",
      });
    }

    // TODO: check user password
    const isCorrectPassword = await bcrypt.compare(data.password, user.password);

    if (!isCorrectPassword) {
      return res.status(UNAUTHORIZED).send({
        status: "error",
        message: "Failed to signin",
        error: "Password invalid",
      });
    }

    res.status(CREATED).send({
      status: "success",
      message: "Success to signin",
      data: user,
    });
  } catch (error) {
    console.error(error);

    // TODO: Handling error validation
    if (error instanceof ZodError<SigninType>) {
      const errorData = error.formErrors.fieldErrors;

      res.status(BAD_REQUEST).send({
        status: "error",
        message: "Failed to signin",
        error: errorData,
      });
    }

    // TODO: Handling error exist email
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        res.status(BAD_REQUEST).send({
          status: "error",
          message: "Failed to signin",
          error: "Email already use",
        });
      }
    }

    // TODO: Default error handling
    res.status(INTERNAL_SERVER_ERROR).send(RESPONSE_INTERNAL_SERVER_ERROR);
  }
};
