import "../styles/StylesGridTile.css";
import { useState } from "react";

const StylesGridTile = (props) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div className="col-md-3 style-tile">
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img
          src={props.yogaImage}
          className="img-fluid style-image"
          alt={props.yogaStyle}
        />
        {hover && (
          <div className="overlay">
            <div className="style-text">{props.yogaStyle}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StylesGridTile;
