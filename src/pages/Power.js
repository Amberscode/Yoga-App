import kingdancer from "../components/yoga-images/KingDancer.jpeg";
import "../styles/StylesPage.css";
import BackButton from "../components/BackButton";

const Power = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <h1 className="styles-header">Power Yoga</h1>
      </div>
      <div className="row styles-row">
        <div className="col-lg-6">
          <img
            src={kingdancer}
            alt="power yoga"
            className="image-fluid mx-auto d-block styles-image"
          />
        </div>
        <div className="col-lg-6 styles-text">
          <p className="styles-text-content">
            Power yoga is a strong, energetic style of yoga adapted from vinyasa
            flow and ashtanga yoga. This practice is a vigorous and revitalizing
            form of physical fitness. Power yoga incorporates strength,
            flexibility and balance while still maintaining a focus on the
            connection between movement and the breath. Students fluidly move
            through regular sequences of asanas that aim to improve both
            physical and mental stamina. Power yoga is best suited for students
            who are familiar with the traditional yoga asanas. This class is
            ideal for those with experience in vinyasa yoga who are looking to
            increase the physical intensity of their practice and focus on the
            exercise aspect of yoga.
          </p>
          <BackButton />
        </div>
      </div>
    </div>
  );
};

export default Power;
