export const calcTotalPrice = (arr) => {
  return arr.reduce((acc, cur) => {
    const { book, quantity } = cur;

    return acc + book.price * quantity;
  }, 0);
};

export const isVavourite = (arr, id) => {
  return arr.find((item) => item.id === id);
};

export const dataWithFilters = (arr, filters) => {
  const { title, price_min, price_max, inStock, categorySlug, offset, limit } = filters;

  return arr
    .filter((product) => {
      const prodTitles = product.title.toLowerCase();
      const prodAuthors = product.author.toLowerCase();
      const result = `${prodTitles} ${prodAuthors}`;

      if (!title) return product;

      const value = title.toLowerCase();
      return result.includes(value);
    })
    .filter((product) => {
      // для поиска по категории:
      if (!categorySlug) return product;
      return product.category.slug.toLowerCase() === categorySlug.toLowerCase();
    })
    .filter((product) => {
      // для поиска по min цене:
      if (!price_min) return product;
      return product.price >= price_min;
    })
    .filter((product) => {
      // для поиска по max цене:
      if (!price_max) return product;
      return product.price <= price_max;
    })
    .filter((product) => {
      // для поиска по наличию товара:
      if (inStock === false) return product;
      return product.qty > 0;
    })
    .filter((product, index) => {
      // для поиска по max цене:
      if (!offset) return product;
      return index >= offset;
    })
    .filter((product, index) => {
      // для поиска по max цене:
      if (!limit) return product;
      return index < limit;
    });
};
