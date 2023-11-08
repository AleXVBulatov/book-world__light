import React from "react";
import { Link } from "react-router-dom";
import { BsSearch, BsTelephone, BsHeart, BsCart2 } from "react-icons/bs";
import { MdLogin, MdLogout } from "react-icons/md";

import styles from "./Header.module.scss";
import ROUTES from "../../utils/routes";
import logo from "../../images/logo/logo-header.png";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.top}>
          <div className="container">
            <div className={styles.row}>
              <div className={styles.logo}>
                <Link to={ROUTES.HOME}>
                  <img src={logo} alt="Logo" />
                </Link>
              </div>

              <form className={styles.form}>
                <div className={styles.input}>
                  <input type="text" name="search" placeholder="Поиск" onChange={() => {}} autoComplete="on" />
                </div>

                <BsSearch size={17} className={styles["icon-search"]} />

                {false && <div className={styles.box}></div>}
              </form>

              <div className={styles.info}>
                <BsTelephone size={20} className={styles["icon-telephone"]} />
                <span>0-800-811-822</span>
              </div>

              <div className={styles.login}>
                <Link to={ROUTES.LOGIN}>
                  <MdLogin size={20} className={styles["icon-login"]} />
                  <span>Войти</span>
                </Link>
              </div>

              <div className={styles.account}>
                <div className={styles.row}>
                  <Link to={ROUTES.FAVOURITE} className={styles.groups}>
                    <BsHeart size={20} />
                    <span className={styles.count}>01</span>
                  </Link>
                  <Link to={ROUTES.CART} className={styles.groups}>
                    <BsCart2 size={20} />
                    <span className={styles.count}>99</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
