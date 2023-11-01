import React, {useEffect, useState} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios, {COMPLETE_DATA_URL, AUTH_GOOGLE_URL, CHECK_USER_URL} from '../../axiosConfig';
import "./style.css";
import logo from "../../assets/Logo.svg";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginPageComponents/LoginForm";
import PopupForm from "../../components/LoginPageComponents/PopupForm";
import CryptoJS from 'crypto-js';

const LoginPage = ({ setIsAdmin }) => {
  const [data, setData] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedAge, setSelectedAge] = useState("");
  const [gender, setGender] = useState("");
  const [token, setToken] = useState("");
  const [isAgreeTerms, setIsAgreeTerms] = useState(false);
  const [isReq, setIsReq] = useState(false)

  const navigate = useNavigate();
  const ageOptions = [];
  for (let i = 18; i <= 99; i++) {
    ageOptions.push(i.toString());
  }
  const handleAgeChange = (event) => {
    setSelectedAge(event.target.value);
  }
  const checkUserEmail = (emailToSend) => {
    const data = { email: emailToSend, password: "" };
    axios
        .post(CHECK_USER_URL, data)
        .then((response) => {
          const { existingCustomer, isAdmin } = response.data;
          if (isAdmin) {
            setIsAdmin(isAdmin);
            navigate("/customer");
          }
        })
        .catch((error) => {
          console.error("error sending email", error);
        });
  };

  /////
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get("token");
    const isNewUser  = urlParams.get("isNewUser")
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
      const decodedData = jwt_decode(tokenFromUrl);
      checkUserEmail(decodedData.email)
      if (isNewUser === 'true') {
        sessionStorage.setItem("userEmail", decodedData.email);
        openPopup();
      } else {
        sessionStorage.setItem("userEmail", decodedData.email);
        navigate("/customer");
      }
      setData(decodedData);
    }
  }, []);

  /////
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("invalid email"),
      password: Yup.string().min(4, "min length 4 characters"),
    }),
    onSubmit: async (values) => {
      values.age = selectedAge;
      values.gender = gender;
      closePopup();
    },
  });
  //
  const formikPopup = useFormik({
    initialValues: {
      age: selectedAge,
      gender: gender,
    },
    onSubmit: (values) => {
      setSelectedAge(values.age);
      setGender(values.gender);
      const dataToSend = {
        ...data,
        email: formik.values.email || data.email,
        password: CryptoJS.AES.encrypt(formik.values.password, 'encryptionKey').toString(),
        age: selectedAge,
        gender: gender,
      };
      //send data to server
      sendUserData(dataToSend);
      closePopup();
      navigate("/customer");
      sessionStorage.setItem("userEmail", dataToSend.email);
    },
  });

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };


  const onOptionChange = (e) => {
    setGender(e.target.value);
  };

  const handleSignInWithGoogle = async () => {
    if (isAgreeTerms) {
    window.location.href = AUTH_GOOGLE_URL;
    } else {
      setIsReq(true);
    }
  };
  // /complete-data
  const sendUserData = async (values) => {
    try {
      const response = await axios.post(COMPLETE_DATA_URL, values);
    } catch (error) {
      console.error("error sending data", error);
    }
  };
  return (
    <div className="login-container">
      <div className="left-login-block">
        <div className="logo footer-logo">
          <img src={logo} alt="logo" />
          <div className="logo-txt">
            <p>MILANO DELIVERY </p>
            <p>QUICK FASHION DELIVERY </p>
          </div>
        </div>
        <div className="login-title-box">
          <h3 className="login-title">Welcome!</h3>
          <p className="login-descr">
            Unisciti alla nostra community, registrati per esplorare ed
            abbracciare il mondo della moda su misura per te.
          </p>
        </div>
      </div>

      {/* Login Form */}
      <LoginForm
        formik={formik}
        openPopup={openPopup}
        handleSignInWithGoogle={handleSignInWithGoogle}
        setIsAdmin={setIsAdmin}
        isAgreeTerms={isAgreeTerms}
        setIsAgreeTerms={setIsAgreeTerms}
        setIsReq={setIsReq}
        isReq={isReq}
      />
      {/* Login Popup (selected age, gender) */}
      <PopupForm
        formikPopup={formikPopup}
        ageOptions={ageOptions}
        selectedAge={selectedAge}
        gender={gender}
        handleAgeChange={handleAgeChange}
        onOptionChange={onOptionChange}
        isPopupOpen={isPopupOpen}
        closePopup={closePopup}
      />

    </div>
  );
}
export default LoginPage;