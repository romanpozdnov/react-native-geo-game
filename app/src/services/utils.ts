export const checkIsOnlyString = (value: string): boolean =>
  /^(\w| ){6,30}$/.test(value);

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

export const ajaxErrorCall = async <T>(
  callback: TCallbackData<T>,
  errorMessage: string
): Promise<T> => {
  try {
    return await callback();
  } catch {
    throw new Error(errorMessage);
  }
};
