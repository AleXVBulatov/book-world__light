import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./UserForm.module.scss";
import { selectUserForm, toggleUserForm } from "../../redux/user/userSlice";

import UserLoginForm from "./UserLoginForm";
import UserSignupForm from "./UserSignupForm";
import { IoMdClose } from "react-icons/io";

const UserForm = () => {
  const [currentForm, setCurrentForm] = useState("login");
  const dispatch = useDispatch();
  const userForm = useSelector(selectUserForm);

  return (
    userForm && (
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <div
            className={styles.left}
            onClick={() => {
              dispatch(toggleUserForm(!userForm));
            }}
          ></div>
          <div className={styles.block}>
            <IoMdClose
              size={26}
              className={styles["btn-close"]}
              onClick={() => {
                dispatch(toggleUserForm(!userForm));
              }}
            />
            {currentForm === "login" ? (
              <UserLoginForm toggleForm={setCurrentForm} />
            ) : (
              <UserSignupForm toggleForm={setCurrentForm} />
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default UserForm;
