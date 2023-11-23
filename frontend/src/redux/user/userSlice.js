import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: [],
  cart: [],
  favourite: [],
  userForm: false,
};

// export const createUser = createAsyncThunk("user/createUser", async (url, thunkApi) => {
//   try {
//     const res = await axios.get(url);
//     return res.data;
//   } catch (error) {
//     return thunkApi.rejectWithValue(error);
//   }
// });

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
    toggleUserForm: (state, action) => {
      state.userForm = action.payload;
    },
    addUser: (state, action) => {
      if (action.payload) {
        state.user = [action.payload];
      } else {
        state.user = [];
      }
    },
  },

  // extraReducers: (builder) => {
  //   builder.addCase(createUser.fulfilled, (state, action) => {
  //     console.log(action);
  //     // state.user.push(action.payload);
  //   });
  // },
});

export const { addToCart, addToFavourite, addUser, toggleUserForm } = userSlice.actions;

export const selectCart = (state) => state.user.cart;
export const selectUserForm = (state) => state.user.userForm;
export const selectUser = (state) => state.user.user;

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
