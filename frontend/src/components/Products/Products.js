import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsHeart } from "react-icons/bs";

import styles from "./Products.module.scss";

import { filterByCategory, selectProducts } from "../../redux/products/productsSlice";

import Rating from "../Raiting/Rating";

const Products = (props) => {
  const { products, amount, title, columns } = props;

  const listAmount = products.filter((el, i) => (!amount ? el : i < amount && el));
  console.log(listAmount);

  const dispatch = useDispatch();
  const location = useLocation();
  const categoryID = location.pathname.split("/").reverse()[0];

  const selector = useSelector(selectProducts);
  // console.log(selector);

  useEffect(() => {
    dispatch(filterByCategory(categoryID));
  }, [dispatch, categoryID, selector?.length]);

  return (
    <section className={styles.products}>
      {title ? <h2 className={styles["section-title"]}>{title}</h2> : <></>}

      <div className={styles.list}>
        {listAmount.length ? (
          listAmount.map((product, index) => {
            return (
              <div key={index} className={styles.card} style={{ flexBasis: `${100 / columns}%` }}>
                <div className={styles.content}>
                  <Link to={`/categories/${categoryID}/${product.id}`} className={styles.image}>
                    <img src={product.images[0]} alt={product.title} />
                  </Link>

                  <div className={styles.wrapper}>
                    <Link to={`/categories/${categoryID}/${product.id}`} className={styles.description}>
                      <h2 className={styles.title}>{product.title}</h2>
                      <h3 className={styles.author}>{product.author}</h3>
                      <p className={styles.price}>${product.other.price}</p>
                    </Link>

                    <div className={styles.order}>
                      <div className={styles.info}>
                        <Rating rating={product.rating} />
                        <span className={styles.inStock}>В наличии</span>
                      </div>

                      <div className={styles.buttons}>
                        <button type="click" className={styles["btn-buy"]}>
                          Купить
                        </button>
                        <button type="click" className={styles["icon-favourite"]}>
                          <BsHeart size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <span>Список пуст</span>
        )}
      </div>
    </section>
  );
};

export default Products;
