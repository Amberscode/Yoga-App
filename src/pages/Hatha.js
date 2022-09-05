import kingpigeon from "../components/yoga-images/KingPigeon.jpeg";
import "../styles/StylesPage.css";
import BackButton from "../components/BackButton";

const Hatha = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <h1 className="styles-header">Hatha Yoga</h1>
      </div>
      <div className="row styles-row">
        <div className="col-lg-6">
          <img
            src={kingpigeon}
            alt="hatha yoga"
            className="image-fluid mx-auto d-block styles-image"
          />
        </div>
        <div className="col-lg-6 styles-text">
          <p className="styles-text-content">
            Hatha yoga focuses on developing awareness, strength, flexibility,
            and relaxation through the pairing of yoga asanas (postures) and
            conscious breathing (pranayama). In hatha yoga classes, asanas are
            held for longer durations to allow students to find proper alignment
            and achieve mental focus. Through mindful body movement and
            breathing, hatha yoga strives to bring balance, strength, and a
            sense of well-being to those who practice it. Hatha yoga is perfect
            for beginners to learn yoga asanas and for experienced yogis to
            perfect their form.
          </p>
          <BackButton />
        </div>
      </div>
    </div>
  );
};

export default Hatha;
