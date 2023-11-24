import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import styles from "./App.module.scss";
import ROUTES from "../../utils/routes";

import { fetchCategories } from "../../redux/categories/categoriesSlice.js";
import { fetchProducts, selectProductsfilterByCategory } from "../../redux/products/productsSlice";
import { BASE_URL } from "../../utils/constants";

import MainLayout from "../../layouts/MainLayout";
import Home from "../../pages/Home/Home";
import Novelty from "../../pages/Novelty/Novelty";
import About from "../../pages/About/About";
import Contacts from "../../pages/Contacts/Contacts";
import Service from "../../pages/Service/Service";
import Products from "../Products/Products";
import SingleProduct from "../SingleProduct/SingleProduct";
import Profile from "../Profile/Profile";

function App() {
  const dispatch = useDispatch();

  const list = useSelector(selectProductsfilterByCategory);

  useEffect(() => {
    dispatch(fetchCategories(`${BASE_URL}/categories`));
    dispatch(fetchProducts(`${BASE_URL}/products`));
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <Routes>
        <Route path={ROUTES.HOME} element={<MainLayout />}>
          <Route index={true} element={<Home />} />
          <Route path={ROUTES.CATEGORY} element={<Products products={list} amount={null} columns={4} />} />
          <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
          <Route path={ROUTES.PROFILE} element={<Profile />} />

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
