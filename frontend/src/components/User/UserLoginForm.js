import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import styles from "./UserForm.module.scss";
import { BASE_URL } from "../../utils/constants";
import { addUser, selectUserForm, toggleUserForm, selectUser } from "../../redux/user/userSlice";

const UserLoginForm = (props) => {
  const { toggleForm } = props;
  const dispatch = useDispatch();
  const userForm = useSelector(selectUserForm);
  const user = useSelector(selectUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    axios
      .post(`${BASE_URL}/users/login`, data)
      .then((res) => {
        if (res.status === 200) {
          return res.data;
        }
      })
      .then((user) => {
        if (typeof user === "object") {
          dispatch(addUser(user));
          dispatch(toggleUserForm(!userForm)); // закрыть окно регистрации
        } else {
          setMessage(user);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles["user-form"]}>
      <h2 className={styles.title}>Login</h2>
      <form method="POST" className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={"Your email"}
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

        {message && <div className={styles.message}>{message}</div>}

        <div
          className={styles.text}
          id="signup"
          onClick={(event) => {
            toggleForm(event.target.id);
          }}
        >
          Создать аккаунт
        </div>

        <button type="submit" className={styles.btn}>
          Login
        </button>

        {user.length > 0 && (
          <div
            className={styles.text}
            style={{ textAlign: "right" }}
            onClick={() => {
              dispatch(toggleUserForm(!userForm));
              dispatch(addUser());
            }}
          >
            Выйти из аккаунта
          </div>
        )}
      </form>
    </div>
  );
};

export default UserLoginForm;
