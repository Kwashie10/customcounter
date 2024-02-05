import React from "react";
import { Link } from "react-router-dom";
import '../styles.css';


function ErrorTest() {
	// const throwError = () => {
	// 	throw new Error("=====ERROR======");
	// };

	return (
		
            <div className="error">
			<h4 className="title" >Sorry, the page you're looking for doesn't exist.</h4>
            <p  className="plink">Click on the link below to return home</p>

			<Link to="/">
        {" "}
        <button className="notfound">Back to Homepage</button>{" "}
      </Link>
            </div>

           
			
		
	);
}

export default ErrorTest;