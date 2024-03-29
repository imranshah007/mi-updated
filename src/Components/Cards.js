import React from "react";
import "../App.css";

const Url ="https://www.namecheap.com/domains/registration/results/?domain=";
const Cards = ({ RandomName }) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className="link"
      href={`${Url}${RandomName}`}
    >
      <div className="card-container">
        <p className="para">{RandomName}</p>
      </div>
    </a>
  );
};
export default Cards;
