import React from "react";
import { Outlet } from "react-router-dom";

import styles from "./MainLayout.module.scss";

import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import Navigation from "../components/Navigation/Navigation.js";
import Sidebar from "../components/Sidebar/Sidebar.js";

const MainLayout = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Header />
          <Navigation position="header" backgroundColor="#673d95" />

          <div className="container">
            <div className={styles.block}>
              <Sidebar />
              <Outlet />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
