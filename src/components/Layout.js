import { Fragment } from "react";
import classes from "./Layout.module.css";
import NavBar from "./NavBar";

const Layout = (props) => {
  return (
    <Fragment>
      <NavBar />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
