import React from "react";

export default function Terms({ isAgreeTerms, setIsAgreeTerms, setIsReq, isReq }) {
  const checkboxHandler = () => {
    setIsAgreeTerms(!isAgreeTerms);
    setIsReq(false)
  };
  return (
    <div className={`terms-container ${isReq ? 'req-box' : ''}`} >
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
      {isReq && (
        <div className="req-field">This field is required</div>
      )}
    </div>
  );
}
