import React from "react";
import "./TopBar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:8000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="topbar">
      {/* left section */}
      <div className="topLeft">
        {/* <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i> */}
      </div>
      {/* end of left section */}

      {/* center section */}
      <div className="topCenter">
        <ul className="topList">
          <Link to="/" className="link">
            <li className="topListItem">HOME</li>
          </Link>

          <Link to="/write" className="link">
            <li className="topListItem">WRITE</li>
          </Link>
          {user && (
            <li className="topListItem" onClick={handleLogout}>
              LOGOUT
            </li>
          )}
        </ul>
      </div>
      {/* end of center section */}

      {/* right section */}
      <div className="topRight">
        {user ? (
            <Link className="topLink" to="/settings">
              <img className="topImg" src={PF + user.profilePic} alt="" />
            <p className="topName">{user.username}</p>
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

        {/* <i className="topSearchIcon fas fa-search"></i> */}
      </div>
      {/* end of right section */}
    </div>
  );
}
