import PriceGrid from "../components/PriceGrid";
import StylesGrid from "../components/StylesGrid";
import "../styles/Home.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVihara,
  faDharmachakra,
  faHandSparkles,
} from "@fortawesome/free-solid-svg-icons";

const Home = (props) => {
  return (
    <div>
      <section className="parallax">
        <div className="parallax-inner-1">
          <h1 className="display-1 welcome-text align-middle">
            Welcome to Yoga
          </h1>
        </div>
      </section>
      <h4 className="home-h4-text">
        Yoga studio is dedicated to providing a relaxed and positive atmosphere
        for our yoga community to explore happiness, health and personal growth
        together. Our studio offers a variety of styles of yoga suitable for
        students of all levels. We believe that yoga is a about understanding
        and developing our inner self through breath and movement. Our studio
        aims to provide a welcoming space for students to experience positive
        states of body and mind, allowing them to ultimately discover their true
        physical and inner potential.
      </h4>
      <h4 className="home-h4-text">
        A one of a kind environment, Yoga studio is the epicenter of renewal,
        healing and self-discovery in Marina Vallarta. Classes are held daily at
        7:00 a.m., 10:00 a.m., 2:00 p.m. and 6:30 p.m. Visit our schedule page
        to select the class that is best for you.
      </h4>
      <section className="parallax-1">
        <div className="parallax-inner">
          <h3 className="quote-text">
            <em>
              “Yoga does not just change the way we see things, it transforms
              the person who sees.”
            </em>
          </h3>
          <h3 className="float-end quote-by">
            <em>― B.K.S Iyengar</em>
          </h3>
        </div>
      </section>
      <div className="container no-pad">
        <div className="row center-header">
          <h2 className="styles-header">Yoga Styles</h2>
        </div>
      </div>

      <StylesGrid />
      <section className="parallax-2">
        <div className="parallax-inner">
          <h3 className="quote-text">
            <em>
              “True yoga is not about the shape of your body, but the shape of
              your life. Yoga is not to be performed; yoga is to be lived. Yoga
              doesn’t care about what you have been; yoga cares about the person
              you are becoming. Yoga is designed for a vast and profound
              purpose, and for it to be truly called yoga, its essence must be
              embodied.”
            </em>
          </h3>
          <h3 className="float-end quote-by">
            <em>— Aadil Palkhivala</em>
          </h3>
        </div>
      </section>
      <div className="container no-pad">
        <div className="row center-header">
          <h2 className="price-header text-center">Pricing</h2>
        </div>
      </div>
      <PriceGrid />

      <section className="parallax-3">
        <div className="parallax-inner">
          <h3 className="quote-text">
            <em>
              “Yoga is the journey of the self, through the self, to the self.”
            </em>
          </h3>
          <h3 className="float-end quote-by">
            <em>― The Bhagavad Gita</em>
          </h3>
        </div>
      </section>
      <div className="home-lower-content">
        <div className="row lower-content-title">
          <h3>Why Choose Yoga Studio?</h3>
        </div>
        <div className="row ">
          <div className="col-md-1 lower-icon">
            <FontAwesomeIcon icon={faHandSparkles} />
          </div>
          <div className="col-md-3 lower-content-columns">
            <h4>Experience</h4>
            <p className="lower-content-para">
              Experienced teachers with a passion for helping you on your
              journey of yoga growth.
            </p>
          </div>
          <div className="col-md-1 lower-icon">
            <FontAwesomeIcon icon={faDharmachakra} />
          </div>
          <div className="col-md-3 lower-content-columns">
            <h4>Variety</h4>
            <p className="lower-content-para">
              We offer a wide range of classes to satisfy different interests,
              goals and moods.
            </p>
          </div>
          <div className="col-md-1 lower-icon">
            <FontAwesomeIcon icon={faVihara} />
          </div>
          <div className="col-md-3 lower-content-columns">
            <h4>Space</h4>
            <p className="lower-content-para">
              Yoga studio is dedicated to cultivating a peaceful and welcoming
              space for students to explore and grow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
