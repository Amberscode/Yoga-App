import "../styles/About.css";
import { Fragment } from "react";
import PriceGrid from "../components/PriceGrid";
import stones from "./images/stones.jpeg";

const About = () => {
  return (
    <Fragment>
      <div className="container-fluid about-page-header ">
        <div className="row">
          <div className="col-md-8 mx-auto align-middle">
            <h1 className="about-h1 display-3">About Yoga Studio</h1>
          </div>
        </div>
      </div>
      <div className="container-fluid about-page-content">
        <div className="row about-page-row">
          <div className="col-md-6 about-text">
            <p>
              Yoga Studio is a bright and spacious studio located in the
              beautiful area of Marina Vallarta. Yoga Studio was founded in 2022
              to provide a yoga home for anyone wishing to explore yoga for the
              first time, or expand their practice. Our passionate certified
              teachers will help you to achieve your yoga goals through
              carefully planned yoga classes, individual attention and
              personalized adjustments. With guided practice, you will develop
              the yoga tools to nurture your body and mind in a practical way.
            </p>
          </div>
          <div className="col-md-6 about-image">
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDY3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="sunset meditation"
              className="image-fluid about-image mx-auto d-block"
            />
          </div>
        </div>
        <div className="row about-page-row">
          <div className="col-md-6 about-image order-2 order-md-1">
            <img
              src={stones}
              alt="zen rocks"
              className="image-fluid about-image mx-auto d-block"
            />
          </div>
          <div className="col-md-6 about-text order-1 order-md-2">
            <p>
              Yoga Studio provides a warm and tranquil environment with room for
              personal attention. Students can choose between various active or
              restorative styles of yoga to suit their level of experience,
              current mood and energy level. Whether you are looking for a high
              intensity, physical practice to tone and stabalize your body, or a
              gentle and calming practice to restore and rejuvinate your body
              and mind, you'll find it here. Our yoga instructors are skilled in
              providing variations and adjustments to help both advanced and
              less experienced students get the maximum benefit from each asana.
              In addition to asana practice, our yoga classes include centering
              practies such as pranayama, meditation and chakra work to help
              calm your mind while you train your body.
            </p>
          </div>
        </div>

        <div className="row about-page-row about-text">
          <h2 className="price-header">Pricing</h2>
          <p className="price-text">
            At Yoga Studio you are free to choose which yoga classes to attend
            each week. Simply purchase a package at our studio and register for
            yoga classes on our schedule page. All scheduled lessons are visible
            for the upcoming month. If you prefer a consistent schedule every
            week, you have the option to register for classes 4 weeks in
            advance.
          </p>
          <PriceGrid />
        </div>
      </div>
    </Fragment>
  );
};

export default About;
