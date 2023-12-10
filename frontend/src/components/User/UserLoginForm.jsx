import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./UserForm.module.scss";
import { selectUser, loginUser, selectMessage, setMessage, selectCreatedUsers } from "../../redux/user/userSlice";
import usersFromDB from "../../data/users.json";

const UserLoginForm = (props) => {
  const { changeFormType, closeForm, createdUsers } = props;
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  const message = useSelector(selectMessage);
  const DEVELOPER = useSelector(selectCreatedUsers);

  const [values, setValues] = useState({
    email: "" || DEVELOPER[0].email,
    password: "" || DEVELOPER[0].password,
  });
  const { email, password } = values;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    const foundUser =
      createdUsers.find((user) => user.email === data.email) || usersFromDB.find((user) => user.email === data.email);

    if (!foundUser) {
      dispatch(setMessage("Неверное имя пользователя или пароль"));
    } else if (foundUser.email !== data.email || foundUser.password !== data.password) {
      dispatch(setMessage("Неверное имя пользователя или пароль"));
    } else if (foundUser.email === data.email && foundUser.password === data.password) {
      dispatch(loginUser(foundUser));
      dispatch(setMessage(""));
    }
  };

  useEffect(() => {
    if (currentUser && !message) {
      setValues({ email: "", password: "" });
      closeForm();
    }
  }, [closeForm, message, currentUser]);

  return (
    <div className={styles["user-form"]}>
      <h2 className={styles.title}>Login</h2>
      <form method="POST" className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.group}>
          <input type="name" name="email" value={email} onChange={handleChange} placeholder={"Your email"} required />
        </div>
        <div className={styles.group}>
          <input type="password" name="password" value={password} onChange={handleChange} placeholder="Your password" required />
        </div>

        <div
          className={styles.text}
          onClick={() => {
            changeFormType("signup");
          }}
        >
          Создать аккаунт
        </div>

        <button type="submit" className={styles.submit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default UserLoginForm;
