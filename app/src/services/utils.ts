type TErrorFunction = (e: Error) => void;
type TRemoveErrorFunction = () => void;

type TCallbackFunction = () => Promise<void>;
type TCallbackData<R> = () => Promise<R>;

export const errorUtilCall = (
  error: TErrorFunction,
  removeError: TRemoveErrorFunction
) => async (callback: TCallbackFunction) => {
  try {
    await callback();
    removeError();
  } catch (e) {
    error(e);
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
