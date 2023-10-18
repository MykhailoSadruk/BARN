import React, { useEffect, useState } from "react";
import axios, { GET_USERS_URL } from '../../axiosConfig';
import "./style.css";


const UserTable = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get( GET_USERS_URL )
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);
  const totalUsers = userData.length;
  const maleUsers = userData.filter((user) => user.gender === "Uomo").length;
  const femaleUsers = userData.filter((user) => user.gender === "Donna").length;
  const ageCategories = {
    under18: userData.filter((user) => user.age < 18).length,
    between18And30: userData.filter((user) => user.age >= 18 && user.age <= 30)
      .length,
    above30: userData.filter((user) => user.age > 30).length,
  };

  return (
    <div className="admin-container">
      <h2 className="admin-title">User data</h2>
      <div className="analytics">
        <h2 className="admin-subtitle">Analytics:</h2>
        <p>
          <span className="admin-catg">Total Users:</span>
          {totalUsers}
        </p>
        <p>
          <span className="admin-catg">Male Users:</span>
          {((maleUsers / totalUsers) * 100).toFixed(2)}%
        </p>
        <p>
          <span className="admin-catg">Female Users:</span>
          {((femaleUsers / totalUsers) * 100).toFixed(2)}%
        </p>
        <p>
          <span className="admin-catg">Did not select a gender:</span>
          {100 -
            (
              (femaleUsers / totalUsers) * 100 +
              (maleUsers / totalUsers) * 100
            ).toFixed(2)}
          %
        </p>

        <p className="admin-catg">Age Categories:</p>
        <ul>
          <li>
            <span className="admin-catg">Under 18:</span>{" "}
            {((ageCategories.under18 / totalUsers) * 100).toFixed(2)}%
          </li>
          <li>
            <span className="admin-catg">18-30:</span>{" "}
            {((ageCategories.between18And30 / totalUsers) * 100).toFixed(2)}%
          </li>
          <li>
            <span className="admin-catg">Above 30:</span>{" "}
            {ageCategories.above30}
          </li>
        </ul>
      </div>
      <div className="table-wrapper">
        <table className="table">
          <thead className="table-header">
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody className="table-items">
            {userData.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
