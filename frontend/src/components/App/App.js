import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./App.module.scss";
import ROUTES from "../../utils/routes";

import { fetchCategories } from "../../redux/categories/categoriesSlice.js";
import { fetchProducts } from "../../redux/products/productsSlice";
import { setCreatedUsers, selectCreatedUsers } from "../../redux/user/userSlice";

import products from "../../data/products.json";
import categories from "../../data/categories.json";
import user from "../../data/users.json";

import MainLayout from "../../layouts/MainLayout";
import Home from "../../pages/Home/Home";
import Novelty from "../../pages/Novelty/Novelty";
import About from "../../pages/About/About";
import Contacts from "../../pages/Contacts/Contacts";
import Service from "../../pages/Service/Service";
import SingleProduct from "../SingleProduct/SingleProduct";
import SingleCategory from "../SingleCategory/SingleCategory.js";
import Profile from "../Profile/Profile";
import Cart from "../Cart/Cart.js";
import Favourites from "../Favourites/Favourites.js";

function App() {
  const dispatch = useDispatch();
  const selector = useSelector(selectCreatedUsers);

  useEffect(() => {
    dispatch(fetchCategories(categories));
    dispatch(fetchProducts(products));
    if (!selector.length) {
      dispatch(setCreatedUsers(user[0]));
    }
  }, [dispatch, selector]);

  return (
    <div className={styles.app}>
      <Routes>
        <Route path={ROUTES.HOME} element={<MainLayout />}>
          <Route index={true} element={<Home />} />
          <Route path={ROUTES.CATEGORY} element={<SingleCategory />} />
          <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
          <Route path={ROUTES.PROFILE} element={<Profile />} />
          <Route path={ROUTES.CART} element={<Cart />} />
          <Route path={ROUTES.FAVOURITES} element={<Favourites />} />

          <Route path={ROUTES.NOVELTY} element={<Novelty />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.CONTACTS} element={<Contacts />} />
          <Route path={ROUTES.SERVICE} element={<Service />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
