import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteAVideo, addToHistory } from "../Services/allApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function VideoCard({ video, setDeleteStatus, insideCategory }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = async () => {
    setShow(true);
    let today = new Date();
    let timeStamp = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(today);

    const { caption, embedLink } = video;

    let videoHistory = {
      caption,
      embedLink,
      timeStamp,
    };

    await addToHistory(videoHistory);
  };

  function dragStarted(e, id) {
    e.dataTransfer.setData("cardId", id);
  }

  return (
    <>
      {video && (
        <Card
          onDragStart={(e) => dragStarted(e, video?.id)}
          draggable
          onClick={handleShow}
          className="p-2 mb-3"
          style={{ width: "13rem", height: "200px" }}
        >
          <Card.Img
            style={{ width: "100%", height: "130px" }}
            variant="top"
            src={video?.url}
          />
          <Card.Body>
            <Card.Title className="d-flex align-items-center justify-content-between">
              <p style={{ fontSize: "16px" }}>{video?.caption.slice(0, 8)}</p>

              {insideCategory ? (
                ""
              ) : (
                <div
                  onClick={() => {
                    deleteAVideo(video?.id);
                    setDeleteStatus((s) => s + 1);
                    toast.success(`${video?.caption} deleted successfully !!`);
                  }}
                  className="btn text-danger mb-3"
                >
                  <i className="fa-solid fa-trash"></i>
                </div>
              )}
            </Card.Title>
          </Card.Body>
        </Card>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="365"
            src={`${video?.embedLink}?autoplay=1`}
            title={video?.caption}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default VideoCard;
