import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./SingleCategory.module.scss";

import { useGetProductsQuery } from "../../redux/api/apiSlice";
import { selectFilteredProducts } from "../../redux/products/productsSlice";
import { setProductsAmountOnPage, selectProductsAmountOnPage } from "../../redux/user/userSlice";

import Category from "./Category";

const SingleCategory = () => {
  const { slug } = useParams();
  const filters = useSelector(selectFilteredProducts);
  const amount = useSelector(selectProductsAmountOnPage);
  const dispatch = useDispatch();
  // const amount = 4;

  const [value, setValue] = useState(amount);
  let [items, setItems] = useState(amount);

  const { data, isLoading, isSuccess } = useGetProductsQuery({
    ...filters,
    categorySlug: slug,
    offset: 0,
    limit: items,
  });

  const handleChange = (event) => {
    const { value } = event.target;
    setValue(value);
  };

  const addMoreFunction = () => {
    let sum = Number(items);
    setItems((sum += Number(amount)));
  };

  useEffect(() => {
    setItems(amount);
    dispatch(setProductsAmountOnPage(value));
  }, [slug, amount, dispatch, value]);

  return isLoading ? (
    <div className={styles.preloader}>Loading...авава</div>
  ) : isSuccess && !data.length ? (
    <div className={styles.back}>По вашему запросу ничего не найдено</div>
  ) : !isSuccess ? (
    <div className={styles.back}>Товар не найден</div>
  ) : (
    <div className={styles.column}>
      <Category products={data} isLoading isSuccess />

      <div className={styles["filter-amount"]}>
        <button
          type="button"
          onClick={addMoreFunction}
          className={styles["btn-more"]}
          hidden={items <= data.length ? false : true}
        >
          Показать еще...
        </button>

        <div className={styles.group}>
          <span>Элементов на странице: </span>

          <select name="amount" onChange={handleChange} value={value}>
            <option value={2}>2</option>
            <option value={4}>4</option>
            <option value={8}>8</option>
            <option value={16}>16</option>
            <option value={24}>24</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;
