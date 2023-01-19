import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "https://blogarista-api.onrender.com/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userID: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("https://blogarista-api.onrender.com/api/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("https://blogarista-api.onrender.com/api/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      window.location.replace("/settings");
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  const handleDelete = async () => {
    dispatch({ type: "DELETE_START" });
    const deleteUser = {
      userID: user._id,
      password,
    }
    try {
      const res = await axios.delete(`/users/${user._id}`, {data: deleteUser});
      if(res.status === 200) {
        setDeleteSuccess(true);
        dispatch({ type: "DELETE_SUCCESS" });
        window.location.replace("/");
      }
    } catch (err) {
      dispatch({ type: "DELETE_FAILURE" });
    }
  }

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <div className="settingsTitleUpdate">Update Your Account</div>
          <div className="settingsTitleDelete" onClick={handleDelete}>Delete Your Account</div>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label htmlFor="">ProfilePicture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt="Profile Picture"
              className="settingsImg"
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
