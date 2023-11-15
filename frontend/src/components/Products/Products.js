import React from "react";
import { Link } from "react-router-dom";
import { BsHeart } from "react-icons/bs";

import styles from "./Products.module.scss";

import Rating from "../Raiting/Rating";

const Products = (props) => {
  const { products } = props;

  return (
    <section className={styles.products}>
      <div className={styles.list}>
        {products.map((product, index) => {
          return (
            <div key={index} className={styles.card}>
              <div className={styles.content}>
                <Link to={`/categories/fiction/${product.id}`} className={styles.image}>
                  <img src={product.images[0]} />
                </Link>

                <div className={styles.wrapper}>
                  <Link to={`/categories/fiction/${product.id}`} className={styles.description}>
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
        })}
      </div>
    </section>
  );
};

export default Products;
{
  /* <div className={styles.list}></div> */
}
