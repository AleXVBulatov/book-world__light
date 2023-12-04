import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import styles from "./SingleCategory.module.scss";

import { useGetProductsQuery } from "../../redux/api/apiSlice";
import {
  selectProductsQuantityOnPage,
  setProductsQuantityOnPage,
  selectProductsAmountOnPage,
  selectCurrentSlug,
  selectFilters,
  setCurrentSlug,
} from "../../redux/user/userSlice";

import Category from "./Category";
import FilterShowMore from "../Filter/FilterShowMore";

const SingleCategory = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();

  const filters = useSelector(selectFilters);
  const amount = useSelector(selectProductsAmountOnPage);
  const quantity = useSelector(selectProductsQuantityOnPage);
  const currentSlug = useSelector(selectCurrentSlug);

  const { data, isLoading, isSuccess } = useGetProductsQuery({
    ...filters,
    categorySlug: slug,
    offset: 0,
    limit: quantity,
  });

  useEffect(() => {
    dispatch(setCurrentSlug(slug));
    if (slug !== currentSlug) {
      dispatch(setProductsQuantityOnPage(amount));
    }
  }, [dispatch, amount, slug, currentSlug]);

  return isLoading ? (
    <div className={styles.preloader}>Loading...</div>
  ) : isSuccess && !data.length ? (
    <div className={styles.back}>По вашему запросу ничего не найдено</div>
  ) : !isSuccess ? (
    <div className={styles.back}>Товар не найден</div>
  ) : (
    <div className={styles.column}>
      <Category products={data} isLoading isSuccess />

      <FilterShowMore data={data} />
    </div>
  );
};

export default SingleCategory;

// рабочий вариант
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// import styles from "./SingleCategory.module.scss";

// import { useGetProductsQuery } from "../../redux/api/apiSlice";
// import {
//   setProductsAmountOnPage,
//   selectProductsAmountOnPage,
//   selectViewedProducts,
//   selectFilters,
// } from "../../redux/user/userSlice";

// import Category from "./Category";
// import FilterShowMore from "../Filter/FilterShowMore";

// const SingleCategory = () => {
//   const { slug } = useParams();
//   const filters = useSelector(selectFilters);
//   const amount = useSelector(selectProductsAmountOnPage);
//   const viewed = useSelector(selectViewedProducts);
//   const dispatch = useDispatch();

//   const [value, setValue] = useState(amount);
//   let [items, setItems] = useState(amount);

//   const { data, isLoading, isSuccess } = useGetProductsQuery({
//     ...filters,
//     categorySlug: slug,
//     offset: 0,
//     limit: items,
//   });

//   const handleChange = (event) => {
//     const { value } = event.target;
//     setValue(value);
//   };

//   const addMoreFunction = () => {
//     let sum = Number(items);
//     setItems((sum += Number(amount)));
//   };

//   useEffect(() => {
//     setItems(amount);
//     dispatch(setProductsAmountOnPage(value));
//   }, [slug, amount, dispatch, value, viewed]);

//   return isLoading ? (
//     <div className={styles.preloader}>Loading...авава</div>
//   ) : isSuccess && !data.length ? (
//     <div className={styles.back}>По вашему запросу ничего не найдено</div>
//   ) : !isSuccess ? (
//     <div className={styles.back}>Товар не найден</div>
//   ) : (
//     <div className={styles.column}>
//       <Category products={data} isLoading isSuccess />

//       <FilterShowMore addMoreFunction={addMoreFunction} handleChange={handleChange} value={value} items={items} data={data} />
//     </div>
//   );
// };

// export default SingleCategory;
