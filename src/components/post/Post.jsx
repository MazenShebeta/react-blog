import React, { useEffect, useState } from "react";
import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:8000/images/";
  return (
    <div className="post">
      <Link to={`/post/${post._id}`} className="link">
        {post.photo ? (
          <img className="postImg" src={PF + post.photo} alt="Post Photo" />
        ) : (
          <img
            className="postImg"
            src="https://images.unsplash.com/photo-1673942393203-fe61f45b4479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Post Photo"
          />
        )}
      </Link>

      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
