import "../styles/StylesGrid.css";
import acro from "./yoga-images/Acro.jpeg";
import aerial from "./yoga-images/aerial.jpeg";
import childpose from "./yoga-images/ChildPose.jpeg";
import kingdancer from "./yoga-images/KingDancer.jpeg";
import kingpigeon from "./yoga-images/KingPigeon.jpeg";
import sideangle from "./yoga-images/SideAngle.jpeg";
import { useState } from "react";

const StylesGrid = (props) => {
  const [aerialHover, setAerialHover] = useState(false);
  const [acroHover, setAcroHover] = useState(false);
  const [hathaHover, setHathaHover] = useState(false);
  const [vinyasaHover, setVinyasaHover] = useState(false);
  const [yinHover, setYinHover] = useState(false);
  const [powerHover, setPowerHover] = useState(false);

  const handleMouseEnterAerial = () => {
    setAerialHover(true);
  };

  const handleMouseLeaveAerial = () => {
    setAerialHover(false);
  };

  const handleMouseEnterAcro = () => {
    setAcroHover(true);
  };

  const handleMouseLeaveAcro = () => {
    setAcroHover(false);
  };
  const handleMouseEnterHatha = () => {
    setHathaHover(true);
  };

  const handleMouseLeaveHatha = () => {
    setHathaHover(false);
  };
  const handleMouseEnterVinyasa = () => {
    setVinyasaHover(true);
  };

  const handleMouseLeaveVinyasa = () => {
    setVinyasaHover(false);
  };
  const handleMouseEnterYin = () => {
    setYinHover(true);
  };

  const handleMouseLeaveYin = () => {
    setYinHover(false);
  };
  const handleMouseEnterPower = () => {
    setPowerHover(true);
  };

  const handleMouseLeavePower = () => {
    setPowerHover(false);
  };

  return (
    <div className="container-fluid  mt-3 mb-5">
      <div className="row justify-content-md-center mx-5">
        <div
          className="col-md-3 style-tile"
          onMouseEnter={handleMouseEnterHatha}
          onMouseLeave={handleMouseLeaveHatha}
        >
          <img
            src={kingpigeon}
            className="img-fluid style-image"
            alt="Hatha Yoga"
          />
          {hathaHover && (
            <div className="overlay">
              <div className="style-text">Hatha Yoga</div>
            </div>
          )}
        </div>
        <div
          className="col-md-3 style-tile"
          onMouseEnter={handleMouseEnterVinyasa}
          onMouseLeave={handleMouseLeaveVinyasa}
        >
          <img
            src={sideangle}
            className="img-fluid style-image"
            alt="Vinyasa Yoga"
          />
          {vinyasaHover && (
            <div className="overlay">
              <div className="style-text">Vinyasa Flow</div>
            </div>
          )}
        </div>
        <div
          className="col-md-3 style-tile"
          onMouseEnter={handleMouseEnterYin}
          onMouseLeave={handleMouseLeaveYin}
        >
          <img
            src={childpose}
            className="img-fluid style-image"
            alt="Yin Yoga"
          />
          {yinHover && (
            <div className="overlay">
              <div className="style-text">Yin Yoga</div>
            </div>
          )}
        </div>
      </div>
      <div className="row justify-content-md-center mx-5">
        <div
          className="col-md-3 style-tile"
          onMouseEnter={handleMouseEnterAerial}
          onMouseLeave={handleMouseLeaveAerial}
        >
          <img
            src={aerial}
            className="img-fluid style-image"
            alt="Aerial Yoga"
          />
          {aerialHover && (
            <div className="overlay">
              <div className="style-text">Aerial Yoga</div>
            </div>
          )}
        </div>
        <div
          className="col-md-3 style-tile"
          onMouseEnter={handleMouseEnterPower}
          onMouseLeave={handleMouseLeavePower}
        >
          <img
            src={kingdancer}
            className="img-fluid style-image"
            alt="Power Yoga"
          />
          {powerHover && (
            <div className="overlay">
              <div className="style-text">Power Yoga</div>
            </div>
          )}
        </div>
        <div
          className="col-md-3 style-tile"
          onMouseEnter={handleMouseEnterAcro}
          onMouseLeave={handleMouseLeaveAcro}
        >
          <img src={acro} className="img-fluid style-image" alt="Acro Yoga" />
          {acroHover && (
            <div className="overlay">
              <div className="style-text">Acro Yoga</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StylesGrid;
