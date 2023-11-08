import React from "react";
import { Link } from "react-router-dom";
import { BsSearch, BsTelephone, BsHeart, BsCart2 } from "react-icons/bs";
import { MdLogin, MdLogout } from "react-icons/md";

import styles from "./Header.module.scss";
import ROUTES from "../../utils/routes";
import logo from "../../images/logo/logo-header.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.row}>
            <div className={styles.logo}>
              <Link to={ROUTES.HOME}>
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <div className={styles.input}>
              <input type="text" name="name" placeholder="Поиск" autoComplete="on" />
              <BsSearch size={17} className={styles["icon-search"]} />
            </div>
            <div className={styles.info}>
              <BsTelephone size={20} className={styles["icon-telephone"]} />
              <span>0-800-811-822</span>
            </div>

            <div className={styles.group__login}>
              <Link to={ROUTES.LOGIN}>
                <MdLogin size={20} className={styles["icon-login"]} />
                <span>Войти</span>
              </Link>
            </div>
            <div className={styles.group__row}>
              <Link to={ROUTES.FAVOURITE}>
                <div className={styles.group__favourite}>
                  <BsHeart size={20} className={styles["icon-favourite"]} />
                  <span className={styles.group__qty}>01</span>
                </div>
              </Link>
              <Link to={ROUTES.CART}>
                <div className={styles.group__cart}>
                  <BsCart2 size={20} className={styles["icon-cart"]} />
                  <span className={styles.group__qty}>99</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
