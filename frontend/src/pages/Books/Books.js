import React from "react";

import data from "../../data/books.json";

const Books = () => {
  return (
    <ul className="block">
      {data.map((book, index) => {
        return (
          <li key={index}>
            <h3>{book.author}</h3>
            <h4>{book.title}</h4>
            <p>{book.year}</p>
            <img src={book.img} alt={book.name} />
          </li>
        );
      })}
    </ul>
  );
};

export default Books;
