import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpa,
  faHouse,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start ">
      <div className="container text-center text-md-start">
        <div className="row">
          <div className="col-md-4 mx-auto mb-3">
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-3"></i>Yoga Studio
            </h6>
            <p>
              <FontAwesomeIcon icon={faHouse} /> Av Paseo de la Marina 121,
              Marina Vallarta, Puerto Vallarta, Mexico
            </p>
          </div>

          <div className="col-md-4 mx-auto mb-md-0 mb-3">
            <h6 className="text-uppercase fw-bold mb-3">Contact</h6>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> yogastudio@contact.com
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> (322) 555-5555
            </p>
          </div>
        </div>
      </div>
      <div className="text-center p-2">
        <FontAwesomeIcon icon={faSpa} className="fa-xl" />
      </div>
    </footer>
  );
};

export default Footer;
