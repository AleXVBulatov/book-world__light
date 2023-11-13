import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import styles from "./MainLayout.module.scss";
import { fetchCategories } from "../redux/categories/categoriesSlice.js";
import { BASE_URL } from "../utils/constants.js";

import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import Navigation from "../components/Navigation/Navigation.js";
import Sidebar from "../components/Sidebar/Sidebar.js";

const MainLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories(`${BASE_URL}/categories`));
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <Header />
      <Navigation position="header" backgroundColor="#673d95" />

      <div className={styles.content}>
        <div className="container">
          <div className={styles.block}>
            <Sidebar />
            <Outlet />
          </div>
        </div>
      </div>

      <Navigation position="footer" backgroundColor="#333333" />
      <Footer />
    </div>
  );
};

export default MainLayout;
