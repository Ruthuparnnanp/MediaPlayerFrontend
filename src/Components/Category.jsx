import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {
  addCategory,
  getAllCategories,
  deleteACategory,
  getAVideo,
  updateCategory,
} from "../Services/allApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import VideoCard from "./VideoCard";

function Category() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [categories, setCategories] = useState([]);

  const [name, setName] = useState("");

  const insertCategory = async () => {
    if (name) {
      let body = {
        name,
        allVideos: [],
      };
      const response = await addCategory(body);

      if (response.status >= 200 && response.status < 300) {
        //reset state
        setName("");
        handleClose();
        toast.success(`${name} added to category ✔️`);
      }
    } else {
      toast.warn("Please enter the category ❗");
    }
  };

  async function getCategories() {
    const { data } = await getAllCategories();
    setCategories(data);
  }

  async function deletee(id) {
    await deleteACategory(id);
    await getCategories();
  }

  useEffect(() => {
    getCategories();
  }, []);

  function dragOverCategory(e) {
    e.preventDefault();
  }

  async function videoDrop(e, id) {
    const videoCardId = e.dataTransfer.getData("cardId");
    const { data } = await getAVideo(videoCardId);
    let selectedCategory = categories.find((item) => item.id === id);
    selectedCategory.allVideos.push(data);
    //update category in json server after dragging
    await updateCategory(id, selectedCategory);
    await getCategories();
  }

  return (
    <>
      <div className="d-grid">
        <button onClick={handleShow} className="btn btn-info rounded">
          Add New Category
        </button>
      </div>

      {categories ? (
        categories.map((item) => (
          <div
            droppable
            onDragOver={(e) => dragOverCategory(e)}
            onDrop={(e) => videoDrop(e, item?.id)}
            className="p-2 mt-3 mb-3 border border-dark rounded"
          >
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">{item.name}</h5>
              <button onClick={() => deletee(item.id)} className="btn">
                <i className="fa-solid fa-trash text-danger"></i>
              </button>
            </div>

            <Row>
              {item?.allVideos &&
                item?.allVideos.map((card) => (
                  <Col
                    className="d-flex justify-content-center p-1 mb-2"
                    sm={12}
                  >
                    <VideoCard video={card} insideCategory={false} />
                  </Col>
                ))}
            </Row>
          </div>
        ))
      ) : (
        <p className="text-danger">Nothing to display</p>
      )}

      <Modal show={show} onHide={handleClose}>
        <h2>Add New Category</h2>
        <Modal.Header closeButton>
          <Modal.Title>Please fill all the fields</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="email"
                placeholder="Enter Category Name "
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary" onClick={insertCategory}>
            Add
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

export default Category;
