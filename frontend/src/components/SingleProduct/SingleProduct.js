import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import styles from "./SingleProduct.module.scss";
import { BsHeart } from "react-icons/bs";

import Rating from "../Raiting/Rating";

const SingleProduct = () => {
  const [activeIndex, setActiveIndex] = useState("description");
  const selector = useSelector((state) => state.products.list);
  const location = useLocation();
  const id = location.pathname.split("/").reverse()[0];

  const product = selector.find((product) => product.id === id);

  const hancdleClick = (id) => {
    setActiveIndex(id);
  };

  // console.log(Object.values(product?.other?));

  return product ? (
    <section className={styles.product}>
      <div className={styles.row}>
        <div className={styles.left}>
          <div className={styles["active-image"]}>
            <img src={product.images[0]} alt={product.title} />
          </div>
          <div className={styles.images}>
            {product.images.map((image, index) => {
              return <img src={image} alt={product.title} key={index} />;
            })}
          </div>
        </div>
        <div className={styles.right}>
          <h2 className={styles.title}>{product.title}</h2>
          <h3 className={styles.author}>{product.author}</h3>
          <div className={styles.price}>{product.price} ₴</div>

          <div className={styles.tabs}>
            <button
              id="description"
              className={
                activeIndex === "description" ? `${styles["btn-description"]} ${styles.active}` : `${styles["btn-description"]}`
              }
              onClick={(event) => hancdleClick(event.target.id)}
            >
              Описание
            </button>
            <button
              id="characteristics"
              className={
                activeIndex === "characteristics"
                  ? `${styles["btn-characteristics"]} ${styles.active}`
                  : `${styles["btn-characteristics"]}`
              }
              onClick={(event) => hancdleClick(event.target.id)}
            >
              Характеристики
            </button>
          </div>

          <div className={styles.block}>
            <div
              className={styles.description}
              style={activeIndex === "description" ? { display: "block" } : { display: "none" }}
            >
              <p className={styles.text}>{product.description}</p>
            </div>

            <ul
              className={styles.characteristics__list}
              style={activeIndex === "characteristics" ? { display: "block" } : { display: "none" }}
            >
              <li className={styles.description__item}>
                <span>Жанр: </span>
                <p>{product.other.genre}</p>
              </li>
              <li className={styles.description__item}>
                <span>Год написания: </span>
                <p>{product.other.year}</p>
              </li>
              <li className={styles.description__item}>
                <span>Количество страниц: </span>
                <p>{product.other.pages}</p>
              </li>
              <li className={styles.description__item}>
                <span>Обложка: </span>
                <p>{product.other.cover}</p>
              </li>
              <li className={styles.description__item}>
                <span>Язык: </span>
                <p>{product.other.language}</p>
              </li>
            </ul>
          </div>

          <div className={styles.order}>
            <Rating rating={product.rating} size={32} />

            <div className={styles.stock}>
              {product.qty ? (
                <span className={styles["in-stock"]}>В наличии</span>
              ) : (
                <span className={styles["out-of-stock"]}>Нет в наличии</span>
              )}
            </div>

            <div className={styles.buttons}>
              <button type="click" className={styles["icon-favourite"]}>
                <BsHeart size={16} />
              </button>
              <button type="click" className={styles["btn-buy"]}>
                Купить
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <span>Загрузка</span>
  );
};

export default SingleProduct;
