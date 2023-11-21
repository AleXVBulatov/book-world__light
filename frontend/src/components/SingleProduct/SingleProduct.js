import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useGetProductQuery } from "../../redux/api/apiSlice";
import ROUTES from "../../utils/routes";

import Product from "./Product";

const SingleProduct = () => {
  const { slug, id } = useParams();
  const { data, isLoading, isSuccess, isFetching } = useGetProductQuery({ slug, id });
  const navigate = useNavigate();

  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.HOME);
    }
  }, [isFetching, isLoading, isSuccess, navigate]);

  return !data ? <section className="preloader">Loading...</section> : <Product {...data} />;
};

export default SingleProduct;

// вариант 1:
// import React from "react";
// import { useParams } from "react-router-dom";

// import { useGetProductQuery } from "../../redux/api/apiSlice";

// import Product from "./Product";

// const SingleProduct = () => {
//   const { slug, id } = useParams();
//   const { data } = useGetProductQuery({ slug, id });

//   return !data ? <section className="preloader">Loading...</section> : <Product {...data} />;
// };

// export default SingleProduct;

// вариант 2:
// import React from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { selectProducts } from "../../redux/products/productsSlice";

// import Product from "./Product";

// const SingleProduct = () => {
//   const { id } = useParams();
//   const selector = useSelector(selectProducts);
//   const data = selector.find((product) => product.id === id);

//   return !data ? <section className="preloader">Loading...</section> : <Product {...data} />;
// };

// export default SingleProduct;

// вариант 3:
// import React, { useEffect } from "react";
// import { getProduct, selectProductById } from "../../redux/products/productsSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

// import Product from "./Product";

// const SingleProduct = () => {
//   const selector = useSelector(selectProductById);
//   const { id } = useParams();

//   const data = selector[0];

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getProduct(id));
//   }, [dispatch, id]);

//   return !data ? <section className="preloader">Loading...</section> : <Product {...data} />;
// };

// export default SingleProduct;
