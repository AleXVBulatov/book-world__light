export const buildUrl = (url, params) => {
  let urlWithParams = url;

  Object.entries(params).forEach((param, i) => {
    const [key, value] = param;
    const sign = !i ? "?" : "&";

    urlWithParams += `${sign}${key}=${value}`;
  });

  return urlWithParams;
};

export const calcTotalPrice = (arr) => {
  return arr.reduce((acc, cur) => {
    const { book, quantity } = cur;

    return acc + book.price * quantity;
  }, 0);
};
