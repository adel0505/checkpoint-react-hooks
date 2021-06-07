import React from "react";
import "./Rate.css";

const Rate = ({ rating, setfilterRate, isEdit }) => {
  var styleSpan = {};
  isEdit
    ? (styleSpan = { cursor: "pointer", width: "50px" })
    : (styleSpan = { cursor: "none", width: "25px" });
  return (
    <div>
      {[1, 2, 3, 4, 5].map((el, index) =>
        el <= rating ? (
          <span
            className="Gold-star"
            style={styleSpan}
            key={el}
            onClick={() => {
              isEdit ? setfilterRate(el) : console.log("null");
            }}
          >
            ★
          </span>
        ) : (
          <span
            className="Grea-star"
            style={styleSpan}
            key={el}
            onClick={() => {
              isEdit ? setfilterRate(el) : console.log("null");
            }}
          >
            ★
          </span>
        )
      )}
    </div>
  );
};
export default Rate;
