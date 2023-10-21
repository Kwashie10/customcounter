import React from "react";
import { Link } from "react-router-dom";
import '../styles.css'

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>404 Not Found</h1>
      <p>The requested page could not be found.</p>

      <Link to="/">
        {" "}
        <button className="notfound">Back to Hompage</button>{" "}
      </Link>
    </div>
  );
};

export default ErrorPage;
