import React from "react";
import BaseCard from "./BaseCard";

export default function BaseMain() {
  const posts = [
    {
      id: 1,
      title: "La roma in finale!",
      content: "Altra magia dello Special One",
    },
    {
      id: 2,
      title: "Sampdoria vicina al fallimento 😥",
      content: "Altra magia di Ferrero",
    },
    {
      id: 3,
      title: "Internazionali di tennis a Roma",
      content: "Musetti in finale!",
    },
  ];

  return (
    <main>
      <section>
        <h2>Ultime news</h2>
        {posts.map((post) => {
          return (
            <BaseCard title={post.title} content={post.content} key={post.id} />
          );
        })}
      </section>
    </main>
  );
}
