import React from "react";
import { Route, Routes } from "react-router-dom";

import styles from "./App.module.scss";
import ROUTES from "../../utils/routes";

import MainLayout from "../../layouts/MainLayout";
import Home from "../../pages/Home/Home";
import Novelty from "../../pages/Novelty/Novelty";
import About from "../../pages/About/About";
import Contacts from "../../pages/Contacts/Contacts";
import Service from "../../pages/Service/Service";
import Products from "../../components/Products/Products";

import data from "../../data/books.json";

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path={ROUTES.HOME} element={<MainLayout />}>
          <Route index={true} element={<Home />} />
          <Route path={ROUTES.CATEGORY} element={<Products products={data} />} />
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
