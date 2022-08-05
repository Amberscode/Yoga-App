import { Fragment } from "react";
import MapWidget from "../components/MapWidget";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <Fragment>
      <div className="container-fluid contact-page-header ">
        <div className="row">
          <div className="col-md-8 mx-auto align-middle">
            <h1 className="contact-h1 display-3">Contact Us</h1>
            <p className="contact-header-blurb">
              We are always available to answer any questions that you may have
              about classes or our studio. Contact us to learn more.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid contact-page-content">
        <div className="row contact-page-row">
          <div className="col-md-6 contact-info">
            <p>
              <h5 className="location-header">Location: </h5>
              Av Paseo de la Marina 121, Marina Vallarta, 48354 Puerto Vallarta,
              Jal., Mexico
            </p>
            <p>
              <h5 className="location-header">E-Mail: </h5>
              yogastudio@contact.com
            </p>
            <p>
              <h5 className="location-header">Phone: </h5> (322) 555-5555
            </p>
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
