import React, { useState } from "react";
import Add from "../Components/Add";
import View from "../Components/View";
import Category from "../Components/Category";
import { Link } from "react-router-dom";
import WatchHistory from "./WatchHistory";

function Home() {
  const [uploadVideoResponse, setUploadVideoResponse] = useState({});

  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between align-items-center">
        <Add setUploadVideoResponse={setUploadVideoResponse} />
        <Link
          to={"/watch-history"}
          className="fs-5"
          style={{ textDecoration: "none", color: "black" }}
        >
          Wacth History
        </Link>
      </div>

      <div className="container-fluid mt-5 mb-5 d-flex justify-content-between ">
        <div className="all-videos col-lg-8">
          <h3>All videos</h3>
          <View uploadVideoResponse={uploadVideoResponse} />
        </div>

        <div className="col-lg-1"></div>

        <div className="col-lg-3">
          <Category />
        </div>
      </div>
    </>
  );
}

export default Home;
