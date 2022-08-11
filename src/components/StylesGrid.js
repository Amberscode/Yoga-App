import "../styles/StylesGrid.css";
import acro from "./yoga-images/Acro.jpeg";
import aerial from "./yoga-images/aerial.jpeg";
import childpose from "./yoga-images/ChildPose.jpeg";
import kingdancer from "./yoga-images/KingDancer.jpeg";
import kingpigeon from "./yoga-images/KingPigeon.jpeg";
import sideangle from "./yoga-images/SideAngle.jpeg";
import "./StylesGridTile";
import StylesGridTile from "./StylesGridTile";

const StylesGrid = () => {
  return (
    <div className="container-fluid  mt-3 mb-5">
      <div className="row justify-content-md-center mx-5">
        <StylesGridTile yogaImage={kingpigeon} yogaStyle={"Hatha Yoga"} />
        <StylesGridTile yogaImage={sideangle} yogaStyle={"Vinyasa Flow"} />
        <StylesGridTile yogaImage={childpose} yogaStyle={"Yin Yoga"} />
      </div>
      <div className="row justify-content-md-center mx-5">
        <StylesGridTile yogaImage={aerial} yogaStyle={"Aerial Yoga"} />
        <StylesGridTile yogaImage={kingdancer} yogaStyle={"Power Yoga"} />
        <StylesGridTile number={6} yogaImage={acro} yogaStyle={"Acro Yoga"} />
      </div>
    </div>
  );
};

export default StylesGrid;
