import { React, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Add = ({ setmoviesList, moviesList, setIsEdit }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  const [newMovie, setNewMovie] = useState({
    id: "",
    photo: "",
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });
  const handelChange = (e) => {
    // e.preventdefault();
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const Addd = () => {
    if (newMovie.description && newMovie.photo && newMovie.rating) {
      setNewMovie({ ...newMovie, id: Math.random() });
      setmoviesList([...moviesList, newMovie]);
    } else {
      alert("mahah");
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form>
            <Form.Group
              controlId="formBasicEmail"
              style={{ textAlign: "left" }}
            >
              <Form.Label>title :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                name="title"
                onChange={handelChange}
              />
            </Form.Group>

            <Form.Group
              controlId="formBasicEmail"
              style={{ textAlign: "left" }}
            >
              <Form.Label>photo :</Form.Label>
              <Form.Control
                type="photo"
                placeholder="Enter photo"
                name="photo"
                onChange={handelChange}
              />
            </Form.Group>

            <Form.Group
              controlId="formBasicEmail"
              style={{ textAlign: "left" }}
            >
              <Form.Label>description :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                name="description"
                onChange={handelChange}
              />
            </Form.Group>
            <Form.Group
              controlId="formBasicEmail"
              style={{ textAlign: "left" }}
            >
              <Form.Label>posterURL :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter posterURL"
                name="posterURL"
                onChange={handelChange}
              />
            </Form.Group>
            <Form.Group
              controlId="formBasicEmail"
              style={{ textAlign: "left" }}
            >
              <Form.Label>rating :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter rating"
                name="rating"
                onChange={handelChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Link to="/movielist">
            <Button variant="primary" onClick={Addd}>
              Save Changes
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;
