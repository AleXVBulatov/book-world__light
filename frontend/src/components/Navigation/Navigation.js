import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.scss";
import ROUTES from "../../utils/routes";

const Navigation = (props) => {
  const { position, backgroundColor } = props;

  const link = position + "Link";
  const activeLink = position + "ActiveLink";

  return (
    <nav className={styles.nav} style={{ backgroundColor: backgroundColor }}>
      <div className="container">
        <nav>
          <ul className={styles.menu}>
            <li>
              <NavLink to={ROUTES.HOME} className={({ isActive }) => (isActive ? activeLink : link)}>
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.CATEGORY} className={({ isActive }) => (isActive ? activeLink : link)}>
                Катагории
              </NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.BOOKS} className={({ isActive }) => (isActive ? activeLink : link)}>
                Книги
              </NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.ABOUT} className={({ isActive }) => (isActive ? activeLink : link)}>
                О нас
              </NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.CONTACTS} className={({ isActive }) => (isActive ? activeLink : link)}>
                Контакты
              </NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.SERVICE} className={({ isActive }) => (isActive ? activeLink : link)}>
                Доставка и оплата
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navigation;
