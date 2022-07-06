import { Fragment } from "react";
import MapWidget from "../components/MapWidget";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <Fragment>
      <div className="container-fluid contact-page-header ">
        <div className="row">
          <div className="col ">
            <h1 className="contact-h1">Contact Page</h1>
          </div>
        </div>
      </div>
      <div className="container-fluid contact-page-content">
        <div className="row contact-page-row">
          <div className="col-md-6 contact-info">
            <p>
              Av Paseo de la Marina 121, Marina Vallarta, 48354 Puerto Vallarta,
              Jal., Mexico
            </p>
            <p>yogastudio@contact.com</p>
            <p>555-5555</p>
          </div>
          <div className="col-md-6 maps-image">
            <MapWidget />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
