export const buildUrl = (url, params) => {
  let urlWithParams = url;

  Object.entries(params).forEach((param, i) => {
    const [key, value] = param;
    const sign = !i ? "?" : "&";

    urlWithParams += `${sign}${key}=${value}`;
  });

  return urlWithParams;
};
