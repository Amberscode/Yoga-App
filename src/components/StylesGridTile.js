import "../styles/StylesGridTile.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StylesGridTile = (props) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const navigate = useNavigate();

  const navigateToStylePage = () => {
    navigate(props.stylePage);
  };

  return (
    <div className="col-md-3 style-tile">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="style-image"
        onClick={navigateToStylePage}
      >
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
