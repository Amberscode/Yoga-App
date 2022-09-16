import { useContext } from "react";
import AuthContext from "../store/auth-context";

const Schedule = () => {
  const authCtx = useContext(AuthContext);
  const loggedIn = authCtx.isLoggedIn;

  return (
    <div>
      <h1>Class Schedule</h1>;
    </div>
  );
};

export default Schedule;
