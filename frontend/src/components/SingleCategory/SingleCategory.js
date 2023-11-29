import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./SingleCategory.module.scss";

import { useGetProductsQuery } from "../../redux/api/apiSlice";
import { selectFilteredProducts } from "../../redux/products/productsSlice";

import Category from "./Category";

const SingleCategory = () => {
  const { slug } = useParams();
  const filters = useSelector(selectFilteredProducts);

  const { data, isLoading, isSuccess } = useGetProductsQuery({ ...filters, categorySlug: slug });

  //  console.log(data);

  return isLoading ? (
    <div className={styles.preloader}>Loading...</div>
  ) : isSuccess && !data.length ? (
    <div className={styles.back}>По вашему запросу ничего не найдено</div>
  ) : !isSuccess ? (
    <div className={styles.back}>Товар не найден</div>
  ) : (
    <Category products={data} isLoading isSuccess />
  );
};

export default SingleCategory;
