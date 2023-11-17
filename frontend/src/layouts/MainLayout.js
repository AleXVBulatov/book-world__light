import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./MainLayout.module.scss";

import { selectProducts } from "../redux/products/productsSlice";

import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import Navigation from "../components/Navigation/Navigation.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import Products from "../components/Products/Products.js";

const MainLayout = () => {
  const list = useSelector(selectProducts);

  return (
    <div className={styles.wrapper}>
      {/* <div id="header"> */}
      <Header />
      <Navigation position="header" backgroundColor="#673d95" />
      {/* </div> */}

      <div className={styles.content}>
        <div className="container">
          <div className={styles.block}>
            <Sidebar />
            <Outlet />
          </div>
        </div>
      </div>

      <div className="container">
        <Products products={list} amount={5} title="Вы просматривали" columns={5} />
      </div>

      {/* <div id="footer"> */}
      <Navigation position="footer" backgroundColor="#333333" />
      <Footer />
      {/* </div> */}
    </div>
  );
};

export default MainLayout;
