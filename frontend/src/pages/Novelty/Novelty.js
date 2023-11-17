import React from "react";
import { useSelector } from "react-redux";

import { selectProducts } from "../../redux/products/productsSlice";

import Products from "../../components/Products/Products";

const Novelty = () => {
  const list = useSelector(selectProducts);

  return <Products products={list} amount={null} columns={4} />;
};

export default Novelty;
