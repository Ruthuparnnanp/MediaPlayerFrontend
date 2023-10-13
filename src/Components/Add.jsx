import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { uploadVideo } from "../Services/allApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Add({ setUploadVideoResponse }) {
  const [show, setShow] = useState(false);
  const [video, setVideo] = useState({
    id: "",
    caption: "",
    url: "",
    embedLink: "",
  });

  const extractLink = (e) => {
    const { value } = e.target;
    if (value) {
      const embed = `https://www.youtube.com/embed/${value.slice(-11)}`;
      setVideo({
        ...video,
        embedLink: embed,
      });
    } else {
      setVideo({
        ...video,
        embedLink: "",
      });
    }
  };

  // useEffect(() => {}, [video]);

  const handleUpload = async () => {
    const { id, url, caption, embedLink } = video;
    if (!id || !url || !caption || !embedLink) {
      toast.warn("Please fill all the fields !!!");
    } else {
      const response = await uploadVideo(video);
      if (response.status >= 200 && response.status < 300) {
        //reset state
        setVideo({
          id: "",
          caption: "",
          url: "",
          embedLink: "",
        });
        //set server response
        setUploadVideoResponse(response.data);
        handleClose();
        toast.success(`${response.data.caption} uploaded successfully ✅`);
      } else {
        toast.error("Please provide unique ID for uploading videos!!!");
      }
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload New Video</h5>
        <button className="btn" onClick={handleShow}>
          <i className="fa-solid fa-circle-plus  fs-2"></i>
        </button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <h2>Upload a Video</h2>
        <Modal.Header closeButton>
          <Modal.Title>Please fill all the fields</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                name="id"
                onChange={(e) => setVideo({ ...video, id: e.target.value })}
                type="email"
                placeholder="Enter Video ID"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                name="caption"
                onChange={(e) =>
                  setVideo({ ...video, caption: e.target.value })
                }
                type="email"
                placeholder="Enter Video Caption"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                name="url"
                onChange={(e) => setVideo({ ...video, url: e.target.value })}
                type="email"
                placeholder="Enter Video Image Url"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                name="link"
                onChange={extractLink}
                type="email"
                placeholder="Enter Youtube Video Link "
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
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

export default Add;
