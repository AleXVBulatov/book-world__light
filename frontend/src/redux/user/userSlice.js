import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  cart: [],
  favourites: [],
  viewed: [],
  isLoading: false,
  showForm: false,
  formType: "login",
  message: "",
  currentSlug: "",
  createdUsers: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    addToCart: (state, action) => {
      let newCart = [...state.cart];
      const found = newCart.find((prod) => prod.book.id === action.payload.book.id);

      if (found) {
        newCart = newCart.map((prod) => {
          return prod.book.id === action.payload.book.id
            ? { ...prod, quantity: !action.payload.quantity ? prod.quantity + 1 : action.payload.quantity }
            : prod;
        });
      } else {
        newCart.push({ ...action.payload, quantity: 1 });
      }
      state.cart = newCart;
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.book.id !== action.payload);
    },
    addToFavourites: (state, action) => {
      let newFavourites = [...state.favourites];
      const found = state.favourites.find((book) => book.id === action.payload.id);
      if (!found) {
        newFavourites.unshift(action.payload);
      } else {
        newFavourites = newFavourites.filter((item) => item.id !== action.payload.id);
      }
      state.favourites = newFavourites;
    },
    toggleForm: (state, action) => {
      state.showForm = action.payload;
    },
    toggleFormType: (state, action) => {
      state.formType = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    removeCurrentUser: (state, action) => {
      state.user = action.payload;
    },
    getViewedProducts: (state, action) => {
      const isFound = state.viewed.find((elem) => elem.id === action.payload.id);

      if (!isFound) {
        state.viewed.unshift(action.payload);
      } else {
        state.viewed = state.viewed.filter((item) => item.id !== action.payload.id);
        state.viewed.unshift(action.payload);
      }
    },
    setCurrentSlug: (state, action) => {
      state.currentSlug = action.payload;
    },
    setCreatedUsers: (state, action) => {
      state.createdUsers.push(action.payload);
    },
    setUpdateUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {
  loginUser,
  addToCart,
  removeFromCart,
  getViewedProducts,
  addToFavourites,
  setCurrentSlug,
  toggleForm,
  removeCurrentUser,
  toggleFormType,
  setMessage,
  setCreatedUsers,
  setUpdateUser,
} = userSlice.actions;

export const selectCart = (state) => state.user.cart;
export const selectFavourites = (state) => state.user.favourites;
export const selectForm = (state) => state.user.showForm;
export const selectFormType = (state) => state.user.formType;
export const selectUser = (state) => state.user.user;
export const selectMessage = (state) => state.user.message;
export const selectCurrentSlug = (state) => state.user.currentSlug;
export const selectViewedProducts = (state) => state.user.viewed;
export const selectCreatedUsers = (state) => state.user.createdUsers;

export default userSlice.reducer;
