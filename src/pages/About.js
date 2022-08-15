import "../styles/About.css";
import { Fragment } from "react";
import PriceGrid from "../components/PriceGrid";

const About = () => {
  return (
    <Fragment>
      <div className="container-fluid about-page-header ">
        <div className="row">
          <div className="col-md-8 mx-auto align-middle">
            <h1 className="about-h1 display-3">About our Yoga Studio</h1>
          </div>
        </div>
      </div>
      <div className="container-fluid about-page-content">
        <div className="row about-page-row">
          <div className="col-md-6 about-text">
            <p>
              Yoga Studio is a bright and spacious studio located in the
              beautiful area of Marina Vallarta. In 2022 Yoga Studio was created
              to provide a yoga home for anyone wishing to explore yoga or
              expand their practice. Our studio offers a variety of styles of
              yoga suitable catering to students of different levels. Our
              passionate certified teachers will help you to achieve your yoga
              goals. Through guided practice, you will develop the yoga tools to
              nurture your body and mind in a practical way.
            </p>
          </div>
          <div className="col-md-6 about-image">
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDY3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="sunset meditation"
              className="about-image"
            />
          </div>
        </div>
        <div className="row about-page-row">
          <div className="col-md-6 about-image">
            <img
              src="https://images.unsplash.com/photo-1502230831726-fe5549140034?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDc3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="zen rocks"
              className="about-image"
            />
          </div>
          <div className="col-md-6 about-text">
            <p>
              Yoga Studio is described by the members as a studio with a warm
              and unique atmosphere, where there is room for personal attention,
              where necessary. Everyone is welcome and is carefully guided in a
              yoga practice that suits your level. The age of the members (men
              and women) is between 20 and 70 years. But you are also welcome if
              you are younger or older. The yoga experience and the levels of
              the members vary. Yoga Studio offers different forms of yoga,
              where one form is more active than the other. You will always find
              a style that suits your level, your character and your motivation!
              Also in the lesson, attention is paid to the different levels of
              the members. For example, the teacher can make adjustments for a
              certain posture for advanced and less advanced members. The
              combination of the feminine soft yin yoga and masculine more
              active yang forms gives a nice balance in the studio. Before and
              after the lessons there is plenty of space for those who want to
              relax together, with a cup of tea and a chat.
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
