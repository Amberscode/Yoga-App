import sideangle from "../components/yoga-images/SideAngle.jpeg";
import "../styles/StylesPage.css";
import BackButton from "../components/BackButton";

const Vinyasa = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <h1 className="styles-header">Vinyasa Yoga</h1>
      </div>
      <div className="row styles-row">
        <div className="col-lg-6">
          <img
            src={sideangle}
            alt="vinyasa yoga"
            className="image-fluid mx-auto d-block styles-image"
          />
        </div>
        <div className="col-lg-6 styles-text">
          <p className="styles-text-content">
            Vinyasa Yoga combines dynamic, fluid movement with conscious,
            deliberate breath. It is a creative and playful style of yoga that
            expolores bending, twisting, stretching, strength, balance and
            stability. Sequential movement through postures and guided breathing
            are utilized to attain balance in the body and mind. For this
            reason, vinyasa yoga is often described as a form of moving
            meditation. Vinyasa yoga is an active and dynamic practice where
            poses are held for no more than five to eight breaths. Vinyasa yoga
            is suitable for yogis of all levels, however a knowledge of basic
            asanas is beneficial to safely get the most out of this class.
          </p>
          <BackButton />
        </div>
      </div>
    </div>
  );
};

export default Vinyasa;
