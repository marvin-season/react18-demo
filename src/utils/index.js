const isFalsy = (value) => !value;

export const cleanObject = (object) => {
  const result = JSON.parse(JSON.stringify(object));

  Object.keys(result).forEach((key) => {
    if (isFalsy(result[key])) {
      delete result[key];
    }
  });

  return result;
};
