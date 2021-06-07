import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./Header.css";
import Add from "./Add";
import Rate from "./Rate";

const Header = ({
  setfilterTitle,
  setfilterRate,
  filterRate,
  setmoviesList,
  moviesList,
}) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      <Form className="EditForm">
        <Row>
          <Col>
            <Form.Control
              placeholder="Filter by Title"
              onChange={(e) => setfilterTitle(e.target.value)}
            />
          </Col>

          <Col>
            <Rate
              setfilterRate={setfilterRate}
              rating={filterRate}
              isEdit="true"
            >
              {" "}
            </Rate>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
export default Header;
