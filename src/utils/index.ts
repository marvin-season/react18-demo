const isFalsy = (value: unknown) => !value;

export const cleanObject: (object: Object) => Object = (object) => {
  const result = JSON.parse(JSON.stringify(object));

  Object.keys(result).forEach((key) => {
    if (isFalsy(result[key])) {
      delete result[key];
    }
  });

  return result;
};
