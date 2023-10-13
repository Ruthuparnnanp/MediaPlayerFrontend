import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Row, Col } from "react-bootstrap";
import { getAllVideos } from "../Services/allApi";

function View({ uploadVideoResponse }) {
  const [allvideos, setAllVideos] = useState([]);
  const [deleteStatus, setDeleteStatus] = useState(0);

  const getAllUploadedVideos = async () => {
    const { data } = await getAllVideos();
    setAllVideos(data);
  };

  useEffect(() => {
    getAllUploadedVideos();
  }, [uploadVideoResponse, deleteStatus]);

  return (
    <>
      <Row>
        {allvideos.length > 0 ? (
          allvideos.map((video) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <VideoCard setDeleteStatus={setDeleteStatus} video={video} />
            </Col>
          ))
        ) : (
          <p className="text-danger">Nothing to display</p>
        )}
      </Row>
    </>
  );
}

export default View;
