import React, { useEffect, useState } from "react";
import axios from "axios";

import styles from "./UserForm.module.scss";
import { BASE_URL } from "../../utils/constants";

const UserSignupForm = (props) => {
  const { toggleForm } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      email,
      password,
      name,
      avatar,
    };

    axios
      .post(`${BASE_URL}/users/signup`, data)
      .then((res) => {
        if (res.status === 200) {
          if (res.data !== "Такой пользователь уже есть") {
            toggleForm("login");
            setMessage("");
          } else {
            setMessage(res.data);
          }
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles["user-form"]}>
      <h2 className={styles.title}>Sign Up</h2>
      <form method="POST" className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Your email"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Your password"
          required
        />
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Your name"
          required
        />
        <input
          type="avatar"
          name="avatar"
          value={avatar}
          onChange={(event) => setAvatar(event.target.value)}
          placeholder="Your avatar"
          required
        />

        {message && <div className={styles.message}>{message}</div>}

        <div
          className={styles.text}
          id="login"
          onClick={(event) => {
            toggleForm(event.target.id);
          }}
        >
          У меня уже есть аккаунт
        </div>
        <button type="submit" className={styles.btn}>
          Create an account
        </button>
      </form>
    </div>
  );
};

export default UserSignupForm;
