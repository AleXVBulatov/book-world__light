import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./Sidebar.module.scss";
import { selectCategories } from "../../redux/categories/categoriesSlice";

const Sidebar = () => {
  const selector = useSelector(selectCategories);
  const [categories] = selector;

  return (
    <section className={styles.sidebar}>
      <div className={styles.block}>
        <h2 className={styles.title}>Категории</h2>
        <ul className={styles.list}>
          {categories &&
            categories.map((category) => {
              return (
                <li key={category.id}>
                  <NavLink
                    to={`categories/${category.id}`}
                    className={({ isActive }) => `${styles.link} ${isActive ? styles.activeLink : ""}`}
                  >
                    {category.name}
                  </NavLink>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
