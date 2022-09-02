import aerial from "../components/yoga-images/aerial.jpeg";
import "../styles/StylesPage.css";

const Aerial = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <h1 className="styles-header">Aerial Yoga</h1>
      </div>
      <div className="row styles-row">
        <div className="col-lg-6">
          <img
            src={aerial}
            alt="aerial yoga"
            className="image-fluid mx-auto d-block styles-image"
          />
        </div>
        <div className="col-lg-6 styles-text">
          <p>
            Aerial yoga uses a suspended hammock or yoga silk to provide support
            to the body while performing asanas. The support from the aerial
            hammock allows students to improve their flexibility and perform
            advanced poses and inversions that they may be unable to do
            unassisted. Aerial yoga incorporates traditional yoga postures as
            well as elements from circuis acrobatics and dance. Various aerial
            sequences and gentle asanas build strength in the body while
            elevating the mood and quieting the mind. Aerial yoga is perfect for
            students of all levels.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aerial;
