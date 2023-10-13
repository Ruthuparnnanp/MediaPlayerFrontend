import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      className="d-flex pt-5  p-3  flex-column justify-items-center align-items-center"
      style={{ width: "100%", height: "400px" }}
    >
      <div className="footer d-flex justify-content-evenly w-100">
        <div style={{ width: "400px" }} className="website">
          <Link
            className="fw-bold"
            to={"/"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <i className="me-1 fa-solid fa-cloud-arrow-up fa-bounce"></i> Media
            Player
          </Link>
          <h6>
            {" "}
            Designed and built with all the love in the world by the Bootstrap
            team with the help of our contributors.
          </h6>
          <h6>Code licensed MIT, docs CC BY 3.0.</h6>
          <p>Currently v5.3.2.</p>
        </div>

        <div className="links d-flex flex-column">
          <h4 className="fw-bold">Links</h4>
          <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
            Landing Page
          </Link>
          <Link style={{ textDecoration: "none", color: "black" }} to={"/home"}>
            Home Page
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={"/watch-history"}
          >
            Watch History
          </Link>
        </div>

        <div className="guides d-flex flex-column">
          <h4 className="fw-bold">Guides</h4>
          <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
            React
          </Link>
          <Link style={{ textDecoration: "none", color: "black" }} to={"/home"}>
            React Bootstrap
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={"/watch-history"}
          >
            Routing
          </Link>
        </div>
      </div>
      <p className="mt-5">Copyrights reserved @ veedio 2023.Built with REACT</p>
    </div>
  );
}

export default Footer;
