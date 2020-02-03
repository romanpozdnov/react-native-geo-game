export const onlyString = (value: string): boolean => {
  const onlyWord: RegExp = /^(\w| ){6,30}$/;
  return onlyWord.test(value);
};
