type TErrorFunction = () => void;
type TCallbackFunction = () => Promise<void>;
type TCallbackData<R> = () => Promise<R>;

export const errorUtilCall = (error: TErrorFunction) => async (
  callback: TCallbackFunction
) => {
  try {
    await callback();
  } catch {
    error();
  }
};

export const ajaxErrorCall = async <Res>(
  callback: TCallbackData<Res>,
  errorMessage: string
): Promise<Res> => {
  try {
    return await callback();
  } catch {
    throw new Error(errorMessage);
  }
};
