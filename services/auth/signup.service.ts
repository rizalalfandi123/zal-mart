import { NextApiRequest, NextApiResponse } from "next";
import { Prisma, PrismaClient } from "@prisma/client";
import { z, ZodError } from "zod";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { signupSchema, SignupType } from "schemas";
import { BAD_REQUEST, CREATED, INTERNAL_SERVER_ERROR, jwtSecret, RESPONSE_INTERNAL_SERVER_ERROR } from "utils";

const prisma = new PrismaClient();

export const signupService = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data: SignupType = req.body;

    // TODO: Validation
    await signupSchema.parseAsync(data);

    // TODO: Crypt password
    const hash = await bcrypt.hash(data.password, 10);
    data.password = hash;

    const user = await prisma.user.create({
      data,
    });

    const { password, ...responseData } = user;

    const token = jwt.sign(responseData, jwtSecret);

    res.status(CREATED).send({
      status: "success",
      message: `Signin as ${user.name}`,
      data: { token },
    });
  } catch (error) {
    console.error(error);

    // TODO: Handling error validation
    if (error instanceof ZodError<SignupType>) {
      const errorData = error.formErrors.fieldErrors;

      res.status(BAD_REQUEST).send({
        status: "error",
        message: "Failed to signup",
        error: errorData,
      });
    }

    // TODO: Handling error exist email
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        res.status(BAD_REQUEST).send({
          status: "error",
          message: "Cannot use your email",
          error: "Email already use",
        });
      }
    }

    // TODO: Default error handling
    res.status(INTERNAL_SERVER_ERROR).send(RESPONSE_INTERNAL_SERVER_ERROR);
  }
};
