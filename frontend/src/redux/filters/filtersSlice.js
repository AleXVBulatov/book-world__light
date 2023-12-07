import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  price_min: "",
  price_max: "",
  inStock: false,
  categorySlug: null,
  offset: 0,
  limit: 0,
  productsAmountOnPage: 8,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: initialState,
  reducers: {
    getFilters: (state, action) => {
      state = Object.assign(state, action.payload);
    },
    getTitleFilter: (state, action) => {
      state.title = action.payload;
    },
    getPriceMinFilter: (state, action) => {
      state.price_min = action.payload;
    },
    getPriceMaxFilter: (state, action) => {
      state.price_max = action.payload;
    },
    getInstockFilter: (state, action) => {
      state.inStock = action.payload;
    },
    getCategorySlugFilter: (state, action) => {
      state.categorySlug = action.payload;
    },
    getOffsetFilter: (state, action) => {
      state.offset = action.payload;
    },
    getLimitFilter: (state, action) => {
      state.limit = action.payload;
    },
    setProductsAmountOnPage: (state, action) => {
      state.productsAmountOnPage = action.payload;
    },
  },
});

export const {
  getFilters,
  getTitleFilter,
  getPriceMinFilter,
  getPriceMaxFilter,
  getInstockFilter,
  getCategorySlugFilter,
  getOffsetFilter,
  getLimitFilter,
  setProductsAmountOnPage,
} = filtersSlice.actions;

export const selectFilters = (state) => state.filters;
export const selectTitleFilter = (state) => state.filters.title;
export const selectPriceMinFilter = (state) => state.filters.price_min;
export const selectPriceMaxFilter = (state) => state.filters.price_max;
export const selectInstockFilter = (state) => state.filters.inStock;
export const selectCategorySlugFilter = (state) => state.filters.categorySlug;
export const selectOffsetFilter = (state) => state.filters.offset;
export const selectLimitFilter = (state) => state.filters.limit;
export const selectProductsAmountOnPage = (state) => state.filters.productsAmountOnPage;

export default filtersSlice.reducer;
