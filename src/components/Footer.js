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
          <div className="col-md-4 mx-auto ">
            <h6 className="text-uppercase fw-bold pb-2 pt-4">Yoga Studio</h6>
            <p className="mb-0">
              <FontAwesomeIcon icon={faHouse} /> Av Paseo de la Marina 121,
              Marina Vallarta, Puerto Vallarta, Mexico
            </p>
          </div>

          <div className="col-md-4 mx-auto mb-md-0 ">
            <h6 className="text-uppercase fw-bold pb-2 pt-4">Contact</h6>
            <p className="mb-0">
              <FontAwesomeIcon icon={faEnvelope} /> yogastudio@contact.com
            </p>
            <p className="mb-0 ">
              <FontAwesomeIcon icon={faPhone} /> (322) 555-5555
            </p>
          </div>
        </div>
      </div>
      <div className="text-center pb-2 ">
        <FontAwesomeIcon icon={faSpa} className="fa-2xl" />
      </div>
    </footer>
  );
};

export default Footer;
