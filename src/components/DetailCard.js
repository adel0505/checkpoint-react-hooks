import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./DetailCard.css";
import Rate from "./Rate";
import { Link } from "react-router-dom";

const DetailCard = ({ match, moviesList }) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    setMovie(moviesList.find((el) => el.id === +match.params.movieId));
  });
  return (
    <>
      <Card className="office-movie" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.photo} />
        <Card.Body>
          <Card.Title>
            <a href={movie.posterURL}>{movie.title}</a>
          </Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <p>
            <Rate rating={movie.rating} isEdit="false"></Rate>
          </p>
          <Button variant="primary" href={movie.posterURL}>
            {movie.title}
          </Button>
        </Card.Body>
      </Card>
      <Link to="/">
        <Button variant="outline-secondary">Back</Button>
      </Link>
    </>
  );
};
export default DetailCard;
