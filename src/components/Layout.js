import { Fragment } from "react";
import classes from "./Layout.module.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <Fragment>
      <NavBar />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
