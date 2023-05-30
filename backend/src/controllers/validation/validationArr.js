const arrValidation = (arr, key) => {
  const resultProduct = arr.every((e) => key[0] in e);
  const resultQuantity = arr.every((e) => key[1] in e);
  if (!resultProduct) {
    return {
      type: 'error',
      message: { message: '"productId" is required' },
    };
  }
  if (!resultQuantity) {
    return {
      type: 'error',
      message: { message: '"quantity" is required' },
    };
  }
  return false;
};

const numberValidation = (arr) => {
  const result = arr.some((e) => e.quantity <= 0);
  if (result) {
    return {
      type: 'error',
      message: { message: '"quantity" must be greater than or equal to 1' },
    };
  }
  return false;
};

module.exports = { arrValidation, numberValidation };