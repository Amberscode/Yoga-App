import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";
import "../styles/Class.css";

const Class = (props) => {
  const authCtx = useContext(AuthContext);
  const loggedIn = authCtx.isLoggedIn;
  const navigate = useNavigate();

  const navigateToStylePage = () => {
    navigate(props.stylePage);
  };

  return (
    <div className="row class-item">
      <p className="col-sm-3 class-item-content">{props.classTime}</p>
      <p className=" col-sm-3 class-item-content">
        <p className="class-item-content">{props.classType} Yoga </p>
        <p
          className="class-item-content class-type-info"
          onClick={navigateToStylePage}
        >
          (Info)
        </p>
      </p>
      <p className=" col-sm-3 class-item-content">{props.classTeacher}</p>
      <div className="col-sm-3 class-item-content">
        {" "}
        {loggedIn ? (
          <button className="btn register-btn">Register</button>
        ) : (
          <p className="not-signed-in-text">Please sign in to register</p>
        )}
      </div>
    </div>
  );
};

export default Class;
