import React from "react";
import { Route, Routes } from "react-router-dom";

import styles from "./App.module.scss";
import ROUTES from "../../utils/routes";

import MainLayout from "../../layouts/MainLayout";
import Home from "../../pages/Home/Home";
import Books from "../../pages/Books/Books";
import Category from "../../pages/Category/Category";
import About from "../../pages/About/About";
import Contacts from "../../pages/Contacts/Contacts";
import Service from "../../pages/Service/Service";

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path={ROUTES.HOME} element={<MainLayout />}>
          <Route index={true} element={<Home />} />
          <Route path={ROUTES.BOOKS} element={<Books />} />
          <Route path={ROUTES.CATEGORY} element={<Category />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.CONTACTS} element={<Contacts />} />
          <Route path={ROUTES.SERVICE} element={<Service />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
