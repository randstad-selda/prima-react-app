import React from "react";

export default function BaseHeader() {
  const title = "Il mio Blog";

  return (
    <header>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
    </header>
  );
}
