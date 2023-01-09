import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.unsplash.com/photo-1660292579530-8f55517c10d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quod.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            {/* <Link className="link" to="/posts?cat=Life"> */}
            Life
            {/* </Link> */}
          </li>
          <li className="sidebarListItem">
            {/* <Link className="link" to="/posts?cat=Music"> */}
            Music
            {/* </Link> */}
          </li>
          <li className="sidebarListItem">
            {/* <Link className="link" to="/posts?cat=Sport"> */}
            Sport
            {/* </Link> */}
          </li>
          <li className="sidebarListItem">
            {/* <Link className="link" to="/posts?cat=Style"> */}
            Style
            {/* </Link> */}
          </li>
          <li className="sidebarListItem">
            {/* <Link className="link" to="/posts?cat=Tech"> */}
            Tech
            {/* </Link> */}
          </li>
          <li className="sidebarListItem">
            {/* <Link className="link" to="/posts?cat=Cinema"> */}
            Cinema
            {/* </Link> */}
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
