import "./App.css";
import react, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartPage from "./screens/StartPage/StartPage";
import LoginPage from "./screens/LoginPage/LoginPage";
import CustomerPage from "./screens/CustomerPage/CustomerPage";
import PrivacyPage from "./screens/PrivacyPage/PrivacyPage";
import TermsPage from "./screens/TermsPage/TermsPage";

function App() {
  const [isUserAdmin, setIsAdmin] = useState(false);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/login" element={<LoginPage setIsAdmin={setIsAdmin}/>} />
          <Route path="/customer" element={<CustomerPage isAdmin={isUserAdmin}/>} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
