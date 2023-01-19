import React from "react";
import "./sidebar.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cat, setCat] = useState([]);
  useEffect(() => {
    const fetchCat = async () => {
      const res = await axios.get("https://blogarista-api.onrender.com/api/categories");
      setCat(res.data);
    };
    fetchCat();
  }, [cat]);

  const goToGithub = () => {
    window.open("https://github.com/MazenShebeta", "_blank");
  };
  const goToLinkdIn = () => {
    window.open("https://www.linkedin.com/in/mazen-shebeta/", "_blank");
  };

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT</span>
        <img
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <p>
          This blog is made for the purpose of shortening the distance between people and their fellow brethren.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cat.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li key={c} className="sidebarListItem">
                {c.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-github" onClick={goToGithub}></i>
          <i className="sidebarIcon fab fa-linkedin" onClick={goToLinkdIn}></i>
        </div>
      </div>
    </div>
  );
}
