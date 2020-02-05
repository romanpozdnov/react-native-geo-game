import { HttpStatus } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

export const createModule = (name: string, schema: any) =>
  MongooseModule.forFeature([{ name, schema }]);

export const utilCall = async <T, R>(
  res: any,
  errorMessage: string,
  action: (payload: R) => Promise<T>,
  payload?: R
): Promise<T> => {
  try {
    const result = await action(payload);
    if (!result)
      return res.status(HttpStatus.UNAUTHORIZED).json({ error: errorMessage });
    return res.status(HttpStatus.OK).json(result);
  } catch {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR);
  }
};
