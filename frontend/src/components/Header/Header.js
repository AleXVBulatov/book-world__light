import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Header.module.scss";
import ROUTES from "../../utils/routes";
import logo from "../../images/logo/logo-header.png";
import { toggleForm, selectUser } from "../../redux/user/userSlice";

import { BsSearch, BsTelephone, BsHeart, BsCart } from "react-icons/bs";
import { PiUserLight } from "react-icons/pi";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(selectUser);

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

                <BsSearch size={18} className={styles["icon-search"]} />

                {false && <div className={styles.box}></div>}
              </form>

              <div className={styles.info}>
                <BsTelephone size={20} className={styles["icon-telephone"]} />
                <span>0-800-811-822</span>
              </div>

              <div className={styles.account}>
                <div className={styles.row}>
                  <Link to={ROUTES.FAVOURITE} className={styles.groups}>
                    <BsHeart size={20} />
                    <span className={styles.count}>01</span>
                  </Link>
                  <Link to={ROUTES.CART} className={styles.groups}>
                    <BsCart size={20} />
                    <span className={styles.count}>99</span>
                  </Link>

                  <div className={styles.login}>
                    {!currentUser ? (
                      <div
                        className={styles.user}
                        onClick={() => {
                          dispatch(toggleForm(true));
                        }}
                      >
                        <PiUserLight size={34} />
                      </div>
                    ) : (
                      <div
                        className={styles.user}
                        onClick={() => {
                          navigate("profile");
                        }}
                      >
                        <img src={`${currentUser.avatar}`} alt="Avatar" />
                      </div>
                    )}
                  </div>
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
