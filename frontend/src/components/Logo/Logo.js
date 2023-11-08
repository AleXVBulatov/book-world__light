import React from "react";
import { Link } from "react-router-dom";

import styles from "./Logo.module.scss";
import ROUTES from "../../utils/routes";

const Logo = (props) => {
  const { colors } = props;
  const colorPrimary = colors?.colorPrimary;
  const colorSecondary = colors?.colorSecondary;

  return (
    <div className={styles.logo}>
      <Link to={ROUTES.HOME}>
        <span className={styles["text-top"]} style={props ? { color: colorPrimary } : {}}>
          B-O^O-K
        </span>
        {/* <span className={styles["text-top"]}>B-O^O-K</span> */}
        <br />
        <span className={styles["text-bottom"]} style={props ? { color: colorSecondary } : {}}>
          WORLD
        </span>
        {/* <span className={styles["text-bottom"]}>WORLD</span> */}
      </Link>
    </div>
  );
};

export default Logo;
