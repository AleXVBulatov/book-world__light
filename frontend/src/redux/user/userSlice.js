import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL } from "../../utils/constants";

const initialState = {
  currentUser: null,
  cart: [],
  favourite: [],
  isLoading: false,
  showForm: false,
  formType: "login",
  message: "",
};

export const createUser = createAsyncThunk("user/createUser", async (data, thunkApi) => {
  try {
    const res = await axios.post(`${BASE_URL}/users/signup`, data);
    return res.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const loginUser = createAsyncThunk("user/loginUser", async (data, thunkApi) => {
  try {
    const res = await axios.post(`${BASE_URL}/users/login`, data);
    return res.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const newCart = [...state.cart];
      const found = newCart.find((prod) => prod.book.id === action.payload.id);
      if (found) {
        newCart.forEach((prod) => {
          return prod.book.id === action.payload.id ? { ...prod, quantity: prod.quantity++ || action.payload.quantity } : prod;
        });
      } else {
        newCart.push({ book: action.payload, quantity: 1 });
      }
      state.cart = newCart;
    },
    addToFavourite: (state, action) => {
      const foundIndex = state.favourite.findIndex((book) => book.id === action.payload.id);
      if (!state.favourite.length) {
        state.favourite.push(action.payload);
      } else {
        state.favourite.splice(foundIndex, 1);
      }
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
      state.currentUser = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      if (action.payload === "Такой пользователь уже есть") {
        state.message = action.payload;
      } else {
        state.message = action.payload;
      }
      state.isLoading = false;
    });

    builder.addCase(loginUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload === "Неверное имя пользователя или пароль") {
        state.message = action.payload;
      } else if (typeof action.payload === "object") {
        state.currentUser = action.payload;
        state.message = "";
      }
      state.isLoading = false;
    });
  },
});

export const { addToCart, addToFavourite, toggleForm, removeCurrentUser, toggleFormType, setMessage } = userSlice.actions;

export const selectCart = (state) => state.user.cart;
export const selectForm = (state) => state.user.showForm;
export const selectFormType = (state) => state.user.formType;
export const selectUser = (state) => state.user.currentUser;
export const selectMessage = (state) => state.user.message;

export default userSlice.reducer;

// 2 вариант:
// const newCart = [...state.cart];
// const found = newCart.find((prod) => prod.book.id === action.payload.id);

// if (found) {
//   newCart.map((prod) => {
//     return prod.book.id === action.payload.id ? { ...prod, quantity: prod.quantity++ || action.payload.quantity } : prod;
//   });
// } else {
//   newCart.push({ book: action.payload, quantity: 1 });
// }

// 3 вариант:
// if (!state.cart.length) {
//   state.cart.push({ book: action.payload, quantity: 1 });
// } else {
//   const found = state.cart.find((prod) => prod.book.id === action.payload.id);

//   found
//     ? state.cart.map((prod) => {
//         return prod.book.id === action.payload.id ? { ...prod, quantity: prod.quantity++ } : prod;
//       })
//     : state.cart.push({ book: action.payload, quantity: 1 });
// }
