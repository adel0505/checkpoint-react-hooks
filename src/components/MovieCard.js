import React from "react";
import { Card, Button } from "react-bootstrap";
import "./MovieCard.css";
import Rate from "./Rate";
import { Link } from "react-router-dom";

const MovieCard = ({
  movie: { photo, posterURL, title, rating, description, id },
}) => {
  return (
    <Card className="office-movie" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={photo} />
      <Card.Body>
        <Card.Title>
          <a href={posterURL}>{title}</a>
        </Card.Title>
        <Card.Text>{description}</Card.Text>
        <p>
          <Rate rating={rating} isEdit={false}></Rate>
        </p>
        <Link to={`/detailcard/${id}`}>
          <Button variant="primary" href={posterURL}>
            {title}
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
export default MovieCard;
