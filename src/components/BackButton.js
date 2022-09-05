import { useNavigate } from "react-router-dom";
import "./BackButton.css";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div className="btn-div">
      <button className="btn back-btn" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

export default BackButton;
