import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsTelegram } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";

import styles from "./Footer.module.scss";
import ROUTES from "../../utils/routes";
import logo from "../../images/logo/logo-footer.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <div className={styles.row}>
              <li>
                <Link to={ROUTES.HOME}>Главная</Link>
              </li>
              <li>
                <Link to={ROUTES.BOOKS}>Книги</Link>
              </li>
              <li>
                <Link to={ROUTES.CATEGORY}>Катагории</Link>
              </li>
              <li>
                <Link to={ROUTES.ABOUT}>Про компанию</Link>
              </li>
              <li>
                <Link to={ROUTES.CONTACTS}>Контакты</Link>
              </li>
              <li>
                <Link to={ROUTES.SERVICE}>Доставка и оплата</Link>
              </li>
            </div>
          </ul>
        </nav>
        <div className={styles.line}></div>
        <div className={styles.row}>
          <div className={styles.logo}>
            <Link to={ROUTES.HOME}>
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <span>Developed by Alexey</span>
          <div className={styles.socials}>
            <Link to="https://www.linkedin.com/in/alexey-bulatov/" target="_blanc">
              <BsLinkedin color="b8b8b8" size={20} />
            </Link>
            <Link to="https://github.com/AleXVBulatov" target="_blanc">
              <BsGithub color="b8b8b8" size={20} />
            </Link>
            <Link to="https://t.me/AleXVBulatov" target="_blanc">
              <BsTelegram color="b8b8b8" size={20} />
            </Link>
            <Link to="mailto:bulatov.a.v.89@gmail.com" target="_blanc">
              <AiFillMail color="b8b8b8" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
