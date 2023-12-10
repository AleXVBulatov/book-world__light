import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./SearchBox.module.scss";

import highlightMatch from "../../utils/highlightMatch";

import { selectProducts } from "../../redux/products/productsSlice";

const SearchBox = (props) => {
  const { searchValue, setSearchValue } = props;
  const data = useSelector(selectProducts);

  const filteredData = data.filter((product) => {
    const prodTitles = product.title.toLowerCase();
    const prodAuthors = product.author.toLowerCase();
    const result = `${prodTitles} ${prodAuthors}`;

    const value = searchValue.toLowerCase();
    return result.includes(value);
  });

  return !filteredData ? (
    <span>Loading</span>
  ) : !filteredData.length ? (
    <div className={styles.result}>По вашему запросу ничего не найдено</div>
  ) : (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {filteredData.map((product) => {
          return (
            <Link
              to={`categories/${product.category.slug}/${product.id}`}
              key={product.id}
              onClick={() => {
                setSearchValue("");
              }}
            >
              <li className={styles.item}>
                <div className={styles.image}>
                  <img src={product.images[0]} alt={product.title} />
                </div>
                <div className={styles.info}>
                  <div className={styles.title}>{highlightMatch(product.title, searchValue)}</div>
                  <div className={styles.author}>{highlightMatch(product.author, searchValue)}</div>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchBox;
