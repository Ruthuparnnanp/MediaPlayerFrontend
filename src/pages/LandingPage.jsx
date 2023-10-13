import React from "react";
import "./landing.css";
import { Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function LandingPage() {
  const navigateByUrl = useNavigate();

  function navigate() {
    navigateByUrl("/home");
  }

  return (
    <>
      <div className="container">
        <Row className="mb-5  align-items-center">
          <Col className="ms-5" md={4}>
            <h1 className="fw-bold fs-3">
              {" "}
              Welcome to{" "}
              <span id="span" className="text-warning">
                {" "}
                Media Player
              </span>
            </h1>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
              aliquam quod illo exercitationem, dolorum architecto, minus
              dolores sint corrupti, aut officiis eaque! Totam odio quia laborum
              officia corporis ullam tenetur?
            </p>
            <button onClick={navigate} className="btn rounded btn-info">
              Get started
            </button>
          </Col>
          <Col></Col>
          <Col md={6}>
            <img
              className="img-fluid"
              src="https://img.freepik.com/free-vector/media-player-software-computer-application-geolocation-app-location-determination-function-male-implementor-programmer-cartoon-character-vector-isolated-concept-metaphor-illustration_335657-2850.jpg?w=2000"
              alt=""
            />
          </Col>
        </Row>
      </div>

      <div className="conatiner mt-5 mb-5 d-flex flex-column justify-content-center align-items-center">
        <h3>Feature</h3>
        <div className="features mt-5 d-flex justify-content-between w-100 container">
          <Card className="p-3 shadow-lg rounded" style={{ width: "18rem" }}>
            <Card.Img
              className="rounded"
              style={{ width: "250px", height: "200px" }}
              variant="top"
              src="https://media1.giphy.com/media/LESpNIDaNBUcRIPzng/giphy.gif"
            />
            <Card.Body>
              <Card.Title className="fw-bold">Managing videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="p-3 shadow-lg rounded" style={{ width: "18rem" }}>
            <Card.Img
              className="rounded"
              style={{ width: "250px", height: "200px" }}
              variant="top"
              src="https://cdn.dribbble.com/users/1028589/screenshots/3155170/jaaqobvideoplay-2dribbble_3.gif"
            />
            <Card.Body>
              <Card.Title className="fw-bold">Categorize videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="p-3 shadow-lg rounded" style={{ width: "18rem" }}>
            <Card.Img
              className="rounded"
              style={{ width: "250px", height: "200px" }}
              variant="top"
              src="https://i.pinimg.com/originals/43/3d/83/433d83f7e481f35245f8c6bb7c7591d8.gif"
            />
            <Card.Body>
              <Card.Title className="fw-bold">Watch history</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div
        style={{ marginTop: "100px" }}
        className="container justify-content-between border p-5 rounded  mb-5 d-flex"
      >
        <div className="content w-50" style={{ textAlign: "justify" }}>
          <h4 className="text-warning fs-3 fw-bold">
            Simple fast and powerfull
          </h4>
          <h6>
            {" "}
            <span className="fs-6 fw-bold">Play Everything</span> : Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Suscipit repellendus
            voluptatibus incidunt alias deleniti? Libero atque saepe, quam
            facere numquam voluptatum minus illo vero delectus ea mollitia nulla
            tempora autem.
          </h6>
          <h6>
            {" "}
            <span className="fs-6 fw-bold">Categorize Videos</span> : Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            repellendus voluptatibus incidunt alias deleniti? Libero atque
            saepe, quam facere numquam voluptatum minus illo vero delectus ea
            mollitia nulla tempora autem.
          </h6>
          <h6>
            {" "}
            <span className="fs-6 fw-bold">Managing History</span> : Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Suscipit repellendus
            voluptatibus incidunt alias deleniti? Libero atque saepe, quam
            facere numquam voluptatum minus illo vero delectus ea mollitia nulla
            tempora autem.
          </h6>
        </div>
        <div className="video mt-4">
          <iframe
            className="rounded"
            width="500"
            height="270"
            src="https://www.youtube.com/embed/6HNFGLCaVFI"
            title="Tory Lanez - The Color Violet (Live) [Official Music Video]"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
