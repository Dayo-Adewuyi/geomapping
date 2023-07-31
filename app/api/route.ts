import {
  connectToDb,
  generateSuccessMessage,
  generateErrorMessage,
} from "@/lib/helpers";
import prisma from "@/prisma";
import { NextApiRequest } from "next";

export const GET = async (req: NextApiRequest) => {
  try {
    await connectToDb();
    const locations = await prisma.location.findMany({});

    return generateSuccessMessage({ locations }, 200);
  } catch (err: any) {
    return generateErrorMessage({ err }, 500);
  }
};

export const POST = async (req: NextApiRequest) => {
  try {
    await connectToDb();
    const { name, address, latitude, longitude } = req.body;
    if (!name || !address || !latitude || !longitude) {
      return generateErrorMessage({ message: "Missing required fields" }, 400);
    }
    const location = await prisma.location.create({
      data: { name, address, latitude, longitude },
    });
    return generateSuccessMessage({ location }, 200);
  } catch (err: any) {}
};

export const PUT = async (req: NextApiRequest) => {
  try {
    await connectToDb();
    const { id, name, address, latitude, longitude } = req.body;
    if (!id || !name || !address || !latitude || !longitude) {
      return generateErrorMessage({ message: "Missing required fields" }, 400);
    }
    const location = await prisma.location.update({
      where: { id },
      data: { name, address, latitude, longitude },
    });
    return generateSuccessMessage({ location }, 200);
  } catch (err: any) {
    return generateErrorMessage({ err }, 500);
  }
};

export const DELETE = async (req: NextApiRequest) => {
  try {
    await connectToDb();
    const { id } = req.body;
    if (!id) {
      return generateErrorMessage({ message: "Missing required fields" }, 400);
    }
    const location = await prisma.location.delete({
      where: { id },
    });
    return generateSuccessMessage({ location }, 200);
  } catch (err: any) {
    return generateErrorMessage({ err }, 500);
  }
};
