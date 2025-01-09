import React from "react";

const SmallBox = ({
  number,
  month,
  colors,
  gridColumn,
  gridRow,
  translate,
}) => {
  let styles = {
    gridColumn: `${gridColumn[0]} / ${gridColumn[1]}`,
    gridRow: `${gridRow[0]} / ${gridRow[1]}`,
    transform: `rotate(${translate}deg)`,
  };
  return (
    <div className="smallBox" style={styles}>
      <div className="textContainer">
        <h2>{number}</h2>
        <h2>{month}</h2>
      </div>

      <div className="circleContainer">
        <div
          className="circle"
          style={{ background: `linear-gradient(${colors[0]}, ${colors[1]})` }}
        ></div>
        <div
          className="circle"
          style={{ background: `linear-gradient(${colors[2]}, ${colors[3]})` }}
        ></div>
        <div
          className="circle"
          style={{ background: `linear-gradient(${colors[4]}, ${colors[5]})` }}
        ></div>
      </div>
    </div>
  );
};

export default SmallBox;
