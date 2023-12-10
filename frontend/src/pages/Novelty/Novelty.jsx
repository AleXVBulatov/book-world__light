import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Novelty.module.scss";

import { setProductsAmountOnPage, selectProductsAmountOnPage, getFilters, selectFilters } from "../../redux/filters/filtersSlice";
import { selectProducts } from "../../redux/products/productsSlice";
import { dataWithFilters } from "../../utils/common";

import Products from "../../components/Products/Products";
import FilterShowMore from "../../components/Filter/FilterShowMore";

const Novelty = () => {
  const filters = useSelector(selectFilters);
  const amount = useSelector(selectProductsAmountOnPage);
  const data = useSelector(selectProducts);
  const dispatch = useDispatch();

  const [value, setValue] = useState(amount);
  let [items, setItems] = useState(amount);

  useEffect(() => {
    dispatch(getFilters({ ...filters, offset: 0, limit: items }));
  }, [dispatch, filters, items]);

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
  }, [amount, dispatch, value]);

  return !filtered.length ? (
    <div className={styles.back}>По вашему запросу ничего не найдено</div>
  ) : (
    <div className={styles.column}>
      <Products products={filtered} amount={filtered.length} columns={4} />

      <FilterShowMore addMoreFunction={addMoreFunction} handleChange={handleChange} value={value} items={items} data={filtered} />
    </div>
  );
};

export default Novelty;
