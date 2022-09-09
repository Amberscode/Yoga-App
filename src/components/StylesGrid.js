import "../styles/StylesGrid.css";
import acro from "./yoga-images/Acro.jpeg";
import aerial from "./yoga-images/aerial.jpeg";
import childpose from "./yoga-images/ChildPose.jpeg";
import kingdancer from "./yoga-images/KingDancer.jpeg";
import kingpigeon from "./yoga-images/KingPigeon.jpeg";
import sideangle from "./yoga-images/SideAngle.jpeg";
import StylesGridTile from "./StylesGridTile";

const StylesGrid = () => {
  return (
    <div className="container-fluid  mt-3 mb-5">
      <div className="row justify-content-md-center mx-2 style-row">
        <StylesGridTile
          yogaImage={kingpigeon}
          yogaStyle={"Hatha Yoga"}
          stylePage={"/hatha"}
        />
        <StylesGridTile
          yogaImage={sideangle}
          yogaStyle={"Vinyasa Flow"}
          stylePage={"/vinyasa"}
        />
        <StylesGridTile
          yogaImage={childpose}
          yogaStyle={"Yin Yoga"}
          stylePage={"/yin"}
        />
      </div>
      <div className="row justify-content-md-center mx-2 style-row">
        <StylesGridTile
          yogaImage={aerial}
          yogaStyle={"Aerial Yoga"}
          stylePage={"/aerial"}
        />
        <StylesGridTile
          yogaImage={kingdancer}
          yogaStyle={"Power Yoga"}
          stylePage={"/power"}
        />
        <StylesGridTile
          yogaImage={acro}
          yogaStyle={"Acro Yoga"}
          stylePage={"/acro"}
        />
      </div>
    </div>
  );
};

export default StylesGrid;
