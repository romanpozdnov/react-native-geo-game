import { MongooseModule } from "@nestjs/mongoose";
import { Response } from "express";
import { HttpStatus } from "@nestjs/common";

export const createModule = (name: string, schema: any) =>
  MongooseModule.forFeature([{ name, schema }]);

interface IData<T> {
  status: number;
  json?: T | { error: string };
}

export const utilCall = async <R>(
  res: Response,
  errorMessage: string,
  action: () => Promise<R>
) => {
  try {
    const data = await action();
    if (!data)
      return res.status(HttpStatus.UNAUTHORIZED).json({ error: errorMessage });
    return res.status(HttpStatus.OK).json(data);
  } catch {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR);
  }
};
