import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./SingleCategory.module.scss";

// import { setProductsAmountOnPage, selectProductsAmountOnPage } from "../../redux/user/userSlice";
import { setProductsAmountOnPage, selectProductsAmountOnPage } from "../../redux/filters/filtersSlice";
import { selectProducts } from "../../redux/products/productsSlice";
import { getFilters, selectFilters } from "../../redux/filters/filtersSlice";
import { dataWithFilters } from "../../utils/common";

import Category from "./Category";
import FilterShowMore from "../Filter/FilterShowMore";

const SingleCategory = () => {
  const { slug } = useParams();
  const filters = useSelector(selectFilters);
  const amount = useSelector(selectProductsAmountOnPage);
  const data = useSelector(selectProducts);
  const dispatch = useDispatch();

  const [value, setValue] = useState(amount);
  let [items, setItems] = useState(amount);

  useEffect(() => {
    dispatch(getFilters({ ...filters, categorySlug: slug, offset: 0, limit: items }));
  }, [dispatch, filters, slug, items]);

  const filtered = dataWithFilters(data, filters);

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

  return !filtered.length ? (
    <div className={styles.back}>По вашему запросу ничего не найдено</div>
  ) : (
    <div className={styles.column}>
      <Category products={filtered} isLoading isSuccess />

      <FilterShowMore addMoreFunction={addMoreFunction} handleChange={handleChange} value={value} items={items} data={filtered} />
    </div>
  );
};

export default SingleCategory;

// const { data, isLoading, isSuccess } = useGetProductsQuery({
//   ...filters,
//   categorySlug: slug,
//   offset: 0,
//   limit: items,
// });

// return isLoading ? (
//   <div className={styles.preloader}>Loading...авава</div>
// ) : isSuccess && !data.length ? (
//   <div className={styles.back}>По вашему запросу ничего не найдено</div>
// ) : !isSuccess ? (
//   <div className={styles.back}>Товар не найден</div>
// ) : (
//   <div className={styles.column}>
//     <Category products={data} isLoading isSuccess />

//     <FilterShowMore addMoreFunction={addMoreFunction} handleChange={handleChange} value={value} items={items} data={data} />
//   </div>
// );
