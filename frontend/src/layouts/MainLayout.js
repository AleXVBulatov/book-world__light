import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./MainLayout.module.scss";

import { selectViewedProducts } from "../redux/user/userSlice";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";
import Sidebar from "../components/Sidebar/Sidebar";
import Products from "../components/Products/Products";
import UserForm from "../components/User/UserForm";

const MainLayout = () => {
  const list = useSelector(selectViewedProducts);

  return (
    <div className={styles.wrapper}>
      {/* <div id="header"> */}
      <Header />
      <Navigation position="header" backgroundColor="#673d95" />
      <UserForm />
      {/* </div> */}

      <div className={styles.content}>
        <div className="container">
          <div className={styles.block}>
            <Sidebar />
            <Outlet />
          </div>
        </div>
      </div>

      <div className="line"></div>
      <div className="container">
        {!!list.length && (
          <div className={styles.haveSeen}>
            <h2 className={styles["section-title"]}>Вы просматривали</h2>
            <div className={styles.content}>
              <Products products={list} amount={null} columns={7} ratingMini />
            </div>
          </div>
        )}
      </div>

      {/* <div id="footer"> */}
      <Navigation position="footer" backgroundColor="#333333" />
      <Footer />
      {/* </div> */}
    </div>
  );
};

export default MainLayout;
