import React from "react";

export default function Terms({ isAgreeTerms, setIsAgreeTerms }) {
  const checkboxHandler = () => {
    setIsAgreeTerms(!isAgreeTerms);
  };
  return (
    <div className="terms-container ">
      <input type="checkbox" onChange={checkboxHandler} />I have read and agree
      to the{" "}
      <a
        className="terms-link"
        target="_blank"
        href="/terms"
        rel="noopener noreferrer"
      >
        Terms and Conditions
      </a>{" "}
      and{" "}
      <a
        className="terms-link"
        target="_blank"
        href="/privacy"
        rel="noopener noreferrer"
      >
        Privacy Policy
      </a>
    </div>
  );
}
