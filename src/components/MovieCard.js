import React from "react";
import { Card, Button } from "react-bootstrap";
import "./MovieCard.css";
import Rate from "./Rate";

const MovieCard = ({ movie }) => {
  return (
      <Card className="office-movie" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.photo} />
        <Card.Body>
          <Card.Title><a href={movie.posterURL}>{movie.title}</a></Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <p>
            <Rate rating={movie.rating}></Rate>
          </p>
          <Button variant="primary" href={movie.posterURL}>
            {movie.title}
          </Button>
        </Card.Body>
      </Card>
    
  );
};
export default MovieCard;
