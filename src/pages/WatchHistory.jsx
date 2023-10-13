import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteAHistory, getHistory } from "../Services/allApi";

function WatchHistory() {
  const [videos, setVideos] = useState([]);

  const getWatchHistory = async () => {
    const { data } = await getHistory();
    setVideos(data);
  };

  useEffect(() => {
    getWatchHistory();
  }, []);

  async function handleDelete(id) {
    await deleteAHistory(id);
    getWatchHistory();
  }

  return (
    <>
      <div className="d-flex container justify-content-between align-items-center mt-5 mb-5">
        <h1>Watch History</h1>
        <Link
          to={"/home"}
          style={{
            textDecoration: "none",
            color: "#000",
            fontSize: "20px",
          }}
        >
          <i className="fa-solid fa-arrow-left me-2"></i>Back
        </Link>
      </div>

      <div className=" container mt-5 mb-5">
        <table className="table table-striped table-bordered border shadow-lg  rounded">
          <thead className="table-dark">
            <tr>
              <th>No</th>
              <th>Caption</th>
              <th>Url</th>
              <th>Time Stamp</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {videos.length > 0 ? (
              videos.map((video, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{video?.caption}</td>
                  <td>
                    <a href={video?.embedLink}>{video?.embedLink}</a>
                  </td>
                  <td>{video.timeStamp}</td>
                  <td
                    onClick={() => handleDelete(video?.id)}
                    className="text-danger"
                  >
                    <i className="fa-solid btn text-danger fa-trash"></i>
                  </td>
                </tr>
              ))
            ) : (
              <p>No history to display.</p>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchHistory;
