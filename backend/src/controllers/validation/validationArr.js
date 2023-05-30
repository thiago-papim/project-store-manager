const arrValidation = async (arr, key) => {
  const result = arr.every((e) => e[key]);
  return result;
};

module.exports = arrValidation;