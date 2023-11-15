import React from "react";

import data from "../../data/books.json";

const Novelty = () => {
  return (
    <ul className="block">
      {data.map((book, index) => {
        console.log(book);
        return (
          <li key={index}>
            <h3>{book.author}</h3>
            <h4>{book.title}</h4>
            <p>{book.year}</p>
            <img src={book.images[0]} alt={book.name} />
          </li>
        );
      })}
    </ul>
  );
};

export default Novelty;
