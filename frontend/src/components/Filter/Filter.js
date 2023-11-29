import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import styles from "./Filter.module.scss";

import { getFilteredProducts } from "../../redux/products/productsSlice";

const Filter = () => {
  const defaultValues = {
    title: "",
    price_min: "",
    price_max: "",
  };

  const [values, setValues] = useState({
    ...defaultValues,
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleReset = () => {
    setValues({ ...defaultValues });
  };

  useEffect(() => {
    dispatch(getFilteredProducts(values));
  }, [dispatch, values]);

  return (
    <section className={styles.filter}>
      <div className={styles.content}>
        <h2 className={styles.title}>Фильтры</h2>
        <div className={styles["filter-title"]}>
          <input type="text" name="title" value={values.title} onChange={handleChange} placeholder="Название книги или автор" />
        </div>
        <div className={styles.row}>
          <div className={styles["filter-price"]}>
            <span>Min: </span>
            <input type="number" name="price_min" value={values.price_min} onChange={handleChange} placeholder="от" /> ₴
          </div>
          <div className={styles["filter-price"]}>
            <span>Max: </span>
            <input type="number" name="price_max" value={values.price_max} onChange={handleChange} placeholder="до" /> ₴
          </div>
        </div>
        <button onClick={handleReset}>Сбросить все фильтры</button>
      </div>
    </section>
  );
};

export default Filter;
