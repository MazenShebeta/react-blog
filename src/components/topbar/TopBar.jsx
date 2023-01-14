import React from "react";
import "./TopBar.css";
import { Link } from "react-router-dom";

export default function TopBar() {
  const user = false;
  return (
    <div className="topbar">

      {/* left section */}
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      {/* end of left section */}

      {/* center section */}
      <div className="topCenter">
        <ul className="topList">
          <Link to="/" className="link">
            <li className="topListItem">HOME</li>
          </Link>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <Link to="/write" className="link">
            <li className="topListItem">WRITE</li>
          </Link>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      {/* end of center section */}

      {/* right section */}
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <Link className="link" to="/login">
              <li className="topListItem">LOGIN</li>
            </Link>

            <Link className="link" to="/register">
              <li className="topListItem">REGISTER</li>
            </Link>
          </ul>
        )}
      </div>
      {/* end of right section */}
      
    </div>
  );
}
