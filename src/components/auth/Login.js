import React from "react";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../../assets/profile.png";
import { Toaster, toast } from "react-hot-toast"; // Import the Toaster component
import { useFormik } from "formik";
import { passwordValidate } from "../../helper/validate";
import { usernameValidate } from "../../helper/validate";
import styles from "../../styles/Login.module.css";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const history = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: passwordValidate,
    usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      if (values.username === "user@example.com" && values.password === "1Password") {
        // Redirect to the Home screen upon successful login
        history("/home");
      } else {
        // Show an error message for invalid credentials using toast
        toast.error("Invalid username or password.");
      }
    },
  });

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Welcome!</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Thanks for stopping by.
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <img src={avatar} className={styles.profile_img} alt="avatar" />
            </div>
            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps("username")}
                className={styles.textbox}
                type="text"
                placeholder="Username"
              />
              <input
                {...formik.getFieldProps("password")}
                className={styles.textbox}
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="text-center py-3">
              <button
                className={styles.btn}
                style={{ width: "6rem" }}
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
