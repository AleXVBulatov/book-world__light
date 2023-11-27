import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Products.module.scss";

import { filterByCategory, selectProducts } from "../../redux/products/productsSlice";
import { addToCart } from "../../redux/user/userSlice";

import Rating from "../Raiting/Rating";
import RatingMini from "../RatingMini/RatingMini";

import { BsHeart } from "react-icons/bs";

const Products = (props) => {
  const { products, amount, title, columns, ratingMini } = props;

  const listAmount = products.filter((el, i) => (!amount ? el : i < amount && el));
  // console.log(listAmount);

  const dispatch = useDispatch();
  const { slug } = useParams();
  const selector = useSelector(selectProducts);

  useEffect(() => {
    dispatch(filterByCategory(slug));
  }, [dispatch, slug, selector?.length]);

  return (
    <section className={styles.products}>
      {title ? <h2 className={styles["section-title"]}>{title}</h2> : <></>}

      <div className={styles.list}>
        {listAmount.length ? (
          listAmount.map((product, index) => {
            // const product = prod.book;
            return (
              <div key={index} className={styles.card} style={{ flexBasis: `${100 / columns}%` }}>
                <div className={styles.content}>
                  <Link to={`/categories/${product.category.id}/${product.id}`} className={styles.image}>
                    <img src={product.images[0]} alt={product.title} />
                  </Link>

                  <div className={styles.wrapper}>
                    <Link to={`/categories/${product.category.id}/${product.id}`} className={styles.description}>
                      <h2 className={styles.title}>{product.title}</h2>
                      <h3 className={styles.author}>{product.author}</h3>
                      <p className={styles.price}>{product.price} ₴</p>
                    </Link>

                    <div className={styles.order}>
                      <div className={styles.info}>
                        {ratingMini ? (
                          <RatingMini rating={product.rating} starSize={20} fontSize={14} />
                        ) : (
                          <Rating rating={product.rating} starSize={20} fontSize={14} />
                        )}
                        <div className={styles.stock}>
                          {product.qty ? (
                            <span className={styles["in-stock"]}>В наличии</span>
                          ) : (
                            <span className={styles["out-of-stock"]}>Нет в наличии</span>
                          )}
                        </div>
                      </div>

                      <div className={styles.buttons}>
                        <button
                          type="click"
                          className={`${styles["btn-buy"]} ${!product.qty && styles["btn-disabled"]}`}
                          onClick={() => dispatch(addToCart(product))}
                          disabled={!product.qty}
                        >
                          Купить
                        </button>

                        <button type="click" className={styles["icon-favourite"]} onClick={() => {}}>
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
          <div className={styles.card}>Список пуст</div>
        )}
      </div>
    </section>
  );
};

export default Products;
