import { useState } from "react";
import { Link } from "react-router-dom";
import '../styles.css';


export default function Root() {
  const [hasError, setHasError] = useState(false);

  // if (hasError) {
  //   // throw new Error("Oh... wow, there is an error somewhere in the react tree");
  // }

  return (
    <div className="page">
      <h1 className="Count">Welcome to Counter App Website</h1>
      <p className="check">
        Please check my{" "}
        <Link to="/counter">
          <h2 className="h2">Counter App</h2>
        </Link>
      </p>
      <div>
        <h3>You can test the Error Boundary and 404Page here</h3>
        <Link to="/ErrorTest">
        <button className="btn" onClick={() => setHasError(true)}>ErrorBoundary test</button>
        </Link>

        <Link to="/ErrorPage">
        <button className="btns" onClick={() => setHasError(true)}>404Page</button>
        </Link>
       
        
      </div>

      <footer className="footer">
        <p className="lens">AltSchool Africa Second Semester Exams</p>
        <p className="lens">© 2023 Kwashie Abednego</p>


      </footer>
        
        
    </div>
  );
}
