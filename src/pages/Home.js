import PriceGrid from "../components/PriceGrid";
import "../styles/Home.css";

const Home = () => {
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
          <h3>Yoga quote</h3>
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
      <section className="parallax-2">
        <div className="parallax-inner">
          <h3>Another yoga quote</h3>
        </div>
      </section>
      <h2 className="display-4 price-header">Pricing</h2>
      <PriceGrid />
    </div>
  );
};

export default Home;
