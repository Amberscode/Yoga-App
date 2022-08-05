import "../styles/StylesGrid.css";
import acro from "./yoga-images/Acro.jpeg";
import aerial from "./yoga-images/aerial.jpeg";
import childpose from "./yoga-images/ChildPose.jpeg";
import kingdancer from "./yoga-images/KingDancer.jpeg";
import kingpigeon from "./yoga-images/KingPigeon.jpeg";
import sideangle from "./yoga-images/SideAngle.jpeg";

const StylesGrid = () => {
  return (
    <div class="container-fluid  mt-3 mb-5">
      <div class="row justify-content-md-center">
        <div class="col-md-3">
          <img src={kingpigeon} class="img-fluid" alt="Hatha Yoga" />
        </div>
        <div class="col-md-3">
          <img src={sideangle} class="img-fluid" alt="Vinyasa Yoga" />
        </div>
        <div class="col-md-3">
          <img src={childpose} class="img-fluid" alt="Yin Yoga" />
        </div>
      </div>
      <div class="row justify-content-md-center">
        <div class="col-md-3">
          <img src={acro} class="img-fluid" alt="Acro Yoga" />
        </div>
        <div class="col-md-3">
          <img src={kingdancer} class="img-fluid" alt="Power Yoga" />
        </div>
        <div class="col-md-3">
          <img src={aerial} class="img-fluid" alt="Aerial Yoga" />
        </div>
      </div>
    </div>
  );
};

export default StylesGrid;
