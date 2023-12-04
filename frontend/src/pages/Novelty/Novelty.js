import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Novelty.module.scss";

import { useGetProductsQuery } from "../../redux/api/apiSlice";
import {
  selectFilters,
  selectProductsAmountOnPage,
  selectProductsQuantityOnPage,
  setProductsQuantityOnPage,
} from "../../redux/user/userSlice";

import Products from "../../components/Products/Products";
import FilterShowMore from "../../components/Filter/FilterShowMore";

const Novelty = () => {
  const location = useLocation();
  const filters = useSelector(selectFilters);
  const amount = useSelector(selectProductsAmountOnPage);
  const quantity = useSelector(selectProductsQuantityOnPage);
  const dispatch = useDispatch();

  const { data, isLoading, isSuccess } = useGetProductsQuery({
    ...filters,
    offset: 0,
    limit: quantity,
  });

  console.log(filters);

  useEffect(() => {
    if (location.pathname !== "/novelty") {
      dispatch(setProductsQuantityOnPage(amount));
    }
  }, [dispatch, location.pathname, amount]);

  return isLoading ? (
    <div className={styles.preloader}>Loading...</div>
  ) : isSuccess && !data.length ? (
    <div className={styles.back}>По вашему запросу ничего не найдено</div>
  ) : !isSuccess ? (
    <div className={styles.back}>Товар не найден</div>
  ) : (
    <div className={styles.list}>
      <Products products={data} amount={data.length} columns={4} />

      <FilterShowMore data={data} />
    </div>
  );
};

export default Novelty;
