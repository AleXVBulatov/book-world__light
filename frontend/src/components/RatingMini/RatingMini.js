import React from "react";

import styles from "./RatingMini.module.scss";

const Rating = (props) => {
  const { rating, size } = props;

  return (
    <div className={styles.rating} style={{ fontSize: size }}>
      <div className={styles.body}></div>
      <div className={styles.result}>{rating ? rating : 0}</div>
    </div>
  );
};

export default Rating;
