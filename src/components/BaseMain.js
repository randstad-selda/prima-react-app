import React from "react";
import BaseCard from "./BaseCard";
import { useState } from "react";

export default function BaseMain() {
  const [posts, setPosts] = useState([
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
  ]);

  function deletePost(id) {
    // const newPosts = posts.filter(function (post) {
    //   // console.log(post);
    //   return post.id != id;
    // });
    // setPosts(newPosts);

    setPosts(posts.filter((post) => post.id != id));
  }

  // tengo traccia dell'input title e della textarea content
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
  });

  function handleFormField(event) {
    // console.log(event.target.name, event.target.value);
    // const newPostValue = {
    //   title: newPost.title,
    //   content: newPost.content,
    // };

    // newPostValue[event.target.name] = event.target.value;

    // setNewPost(newPostValue);

    setNewPost({
      ...newPost,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    const post = {
      id: posts[posts.length - 1].id + 1,
      ...newPost,
    };

    const newPosts = [...posts]; //clone dello stato attuale dei posts
    newPosts.push(post); // aggiungo il post
    setPosts(newPosts); // muto lo stato

    // setPosts([
    //   ...posts,
    //   {
    //     id: posts[posts.length - 1].id + 1,
    //     ...newPost,
    //   },
    // ]);

    setNewPost({
      title: "",
      content: "",
    });
  }

  return (
    <main>
      <section>
        <h2>Ultime news</h2>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <BaseCard title={post.title} content={post.content} />
              <button
                onClick={function () {
                  deletePost(post.id);
                }}
              >
                Cancella
              </button>
            </div>
          );
        })}
        <hr></hr>
        <h3 style={{ textAlign: "center" }}>Inserisci nuovo post</h3>
        <form onSubmit={handleSubmitForm}>
          <input
            onChange={handleFormField}
            value={newPost.title}
            type="text"
            name="title"
            placeholder="titolo post"
          />
          <textarea
            onChange={handleFormField}
            value={newPost.content}
            name="content"
            cols="30"
            rows="2"
            placeholder="contenuto post"
          ></textarea>
          <button type="submit">Crea</button>
        </form>
      </section>
    </main>
  );
}
