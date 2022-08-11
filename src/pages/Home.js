import PriceGrid from "../components/PriceGrid";
import StylesGrid from "../components/StylesGrid";
import "../styles/Home.css";
import { useState } from "react";

const Home = (props) => {
  return (
    <div>
      <section className="parallax">
        <div className="parallax-inner-1">
          <h1 className="display-1">Welcome to Yoga</h1>
        </div>
      </section>
      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        minima fuga debitis quasi eius aliquid sapiente? Cumque blanditiis
        quibusdam, ex totam aliquam provident alias culpa, sit illo, eum
        doloribus doloremque. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Excepturi reprehenderit voluptatum aperiam pariatur numquam
        praesentium recusandae, ipsa at iusto eveniet, distinctio sunt dolore
        nemo veniam maiores vitae deserunt cum ducimus.
      </h4>
      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        minima fuga debitis quasi eius aliquid sapiente? Cumque blanditiis
        quibusdam, ex totam aliquam provident alias culpa, sit illo, eum
        doloribus doloremque. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Excepturi reprehenderit voluptatum aperiam pariatur numquam
        praesentium recusandae, ipsa at iusto eveniet, distinctio sunt dolore
        nemo veniam maiores vitae deserunt cum ducimus.
      </h4>
      <section className="parallax-1">
        <div className="parallax-inner">
          <h3>
            <em>
              “Yoga does not just change the way we see things, it transforms
              the person who sees.”
            </em>
          </h3>
          <h3 className="float-end">
            <em>― B.K.S Iyengar</em>
          </h3>
        </div>
      </section>

      <h2 className="styles-header">Yoga Styles</h2>
      <StylesGrid
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      // hover={hover}
      />
      <section className="parallax-2">
        <div className="parallax-inner">
          <h3>
            <em>
              “True yoga is not about the shape of your body, but the shape of
              your life. Yoga is not to be performed; yoga is to be lived. Yoga
              doesn’t care about what you have been; yoga cares about the person
              you are becoming. Yoga is designed for a vast and profound
              purpose, and for it to be truly called yoga, its essence must be
              embodied.”
            </em>
          </h3>
          <h3 className="float-end">
            <em>— Aadil Palkhivala</em>
          </h3>
        </div>
      </section>

      <h2 className="price-header">Pricing</h2>
      <PriceGrid />

      <section className="parallax-3">
        <div className="parallax-inner">
          <h3>
            <em>
              “Yoga is the journey of the self, through the self, to the self.”
            </em>
          </h3>
          <h3 className="float-end">
            <em>― The Bhagavad Gita</em>
          </h3>
        </div>
      </section>
      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        minima fuga debitis quasi eius aliquid sapiente? Cumque blanditiis
        quibusdam, ex totam aliquam provident alias culpa, sit illo, eum
        doloribus doloremque. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Excepturi reprehenderit voluptatum aperiam pariatur numquam
        praesentium recusandae, ipsa at iusto eveniet, distinctio sunt dolore
        nemo veniam maiores vitae deserunt cum ducimus.
      </h4>
      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        minima fuga debitis quasi eius aliquid sapiente? Cumque blanditiis
        quibusdam, ex totam aliquam provident alias culpa, sit illo, eum
        doloribus doloremque. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Excepturi reprehenderit voluptatum aperiam pariatur numquam
        praesentium recusandae, ipsa at iusto eveniet, distinctio sunt dolore
        nemo veniam maiores vitae deserunt cum ducimus.
      </h4>
    </div>
  );
};

export default Home;
