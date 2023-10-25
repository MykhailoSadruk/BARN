import React from "react";
import googleIcon from "../../assets/googleIcon.svg";
import axios, { CHECK_USER_URL } from "../../axiosConfig";
import { useNavigate } from "react-router-dom";
import Terms from "./Terms";

const LoginForm = ({
  formik,
  openPopup,
  handleSignInWithGoogle,
  setIsAdmin,
  isAgreeTerms,
  setIsAgreeTerms,
}) => {
  const navigate = useNavigate();

  const checkUserEmail = (emailToSend) => {
    const data = { email: emailToSend, password: "" };
    axios
      .post(CHECK_USER_URL, data)
      .then((response) => {
        const { existingCustomer, isAdmin } = response.data;
        if (isAdmin) {
          setIsAdmin(isAdmin);
          navigate("/customer");
          sessionStorage.setItem("isAdmin", isAdmin);
          sessionStorage.setItem("typeof", typeof isAdmin);
        } else if (existingCustomer) {
          navigate("/customer");
          sessionStorage.setItem("userEmailForm", emailToSend);
        } else {
          openPopup();
        }
      })
      .catch((error) => {
        console.error("error sending email", error);
      });
  };
  return (
    <div className="login-form-wrapper">
      <h2 className="form-title">Log In</h2>
      <p className="form-descr">Inserisci le tue credenziali per accedere</p>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-item">
          <label className="input-label" htmlFor="email">
            Email
          </label>
          <input
            className="input-field"
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="@gmail.com"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error-message">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-item">
          <label className="input-label" htmlFor="password">
            Password
          </label>
          <input
            className="input-field"
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="*******"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error-message">{formik.errors.password}</div>
          ) : null}
        </div>
        <div>
          <button
            disabled={!isAgreeTerms}
            onClick={() => {
              checkUserEmail(formik.values.email);
            }}
            className="login-form-btn"
            type="submit"
          >
            Log In &rarr;
          </button>
        </div>
        <div>
          <div className="login-line-box">
            <hr className="horizontal-line" />
            <div className="horizontal-line-txt">or</div>
            <hr className="horizontal-line" />
          </div>
          <div>
            {/* redirect to userData from google auth */}
            <button
              disabled={!isAgreeTerms}
              onClick={handleSignInWithGoogle}
              className="login-form-btn red-bg"
              type="submit"
            >
              <img className="google-icon" src={googleIcon} alt="google-icon" />
              Sign in with Google
            </button>
          </div>
        </div>
      </form>
      <Terms
        isAgreeTerms={isAgreeTerms}
        setIsAgreeTerms={setIsAgreeTerms}
      ></Terms>
    </div>
  );
};

export default LoginForm;
