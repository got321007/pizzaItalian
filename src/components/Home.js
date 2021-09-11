import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";
import "./HomeStyle.css";

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
    <div className="divpizzaimg">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand logo">
            <img src={require('../img/pizza-box.png').default} alt="" width="35" height="30" class="d-inline-block align-text-top"/>
            PIzzare Italian</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse GroupLoginSignup"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {currentUser ? (
                <li className="nav-item">
                  <a className="nav-link d-flex justify-content-center" href="/dashboard">
                    View Dashboard
                  </a>
                </li>
              ) : (
                <li className="nav-item">
                  <a className="nav-link d-flex justify-content-center" href="/login">
                    Login
                  </a>
                </li>
              )}
              {currentUser ? (
                <li className="nav-item">
                  <a className="nav-link d-flex justify-content-center" href="/dashboard"></a>
                </li>
              ) : (
                <li className="nav-item">
                  <a className="nav-link d-flex justify-content-center" href="/signup">
                    Sign Up
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      </div>
      <div className="container nameshop">
  <div className="row">
    <div className="col-8 textnameshop">
      <p>Are you ready to feel delicious ?</p>
    </div>
  </div>
  <div className="row">
    <div className="col-8 textslogan">
      <p>THE BEST ITALIAN PIZZA</p>
    </div>
  </div>
</div>
    </>
  );
};

export default Home;
