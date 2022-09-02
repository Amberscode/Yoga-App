import childpose from "../components/yoga-images/ChildPose.jpeg";
import "../styles/StylesPage.css";

const Yin = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <h1 className="styles-header">Yin Yoga</h1>
      </div>
      <div className="row styles-row">
        <div className="col-lg-6">
          <img
            src={childpose}
            alt="yin yoga"
            className="image-fluid mx-auto d-block styles-image"
          />
        </div>
        <div className="col-lg-6 styles-text">
          <p>
            Yin yoga is gentle and restoritave form of yoga consisting mainly of
            passive stretches held for long durations, often around five
            minutes. This slower, more meditative style of yoga targets the deep
            connective tissues of the body. Deep breathing through these long
            stretches allows the body to gently release tension in areas such as
            the hips, spine, pelvis and hamstrings. Yin yoga is perfect for
            anyone recovering from and injury, athletes looking to ease soreness
            or individuals looking to de-stress and find ease. This class is
            suitable for students of all levels.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Yin;
