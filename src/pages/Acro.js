import acro from "../components/yoga-images/Acro.jpeg";
import "../styles/StylesPage.css";
import BackButton from "../components/BackButton";

const Acro = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <h1 className="styles-header">Acro Yoga</h1>
      </div>
      <div className="row styles-row">
        <div className="col-lg-6">
          <img
            src={acro}
            alt="acro yoga"
            className="image-fluid mx-auto d-block styles-image"
          />
        </div>
        <div className="col-lg-6 styles-text">
          <p className="styles-text-content">
            Acro yoga is a playful and acrobatic form of yoga, usually performed
            with a partner. This class incorporates elements of vinyasa and
            hatha yoga but also acrobatics and Thai massage. Yogis work together
            to create different shapes or perform lifts. Acro yoga builds
            strength, flexibility and balance while also fostering a sense of
            trust and connection between partners. Yogis of all levels are
            welcome to join. Students may choose to bring their own partner or
            pair up with other students in the class.
          </p>
          <BackButton />
        </div>
      </div>
    </div>
  );
};

export default Acro;
