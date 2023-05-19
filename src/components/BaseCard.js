import React from "react";

export default function BaseCard(props) {
  return (
    <div className="card">
      <h3 className="card__title">{props.title || "Titolo Card"}</h3>
      <p>{props.content || "Contenuto Card"}</p>
    </div>
  );
}
