import "../styles/PriceGrid.css";

const PriceGrid = () => {
  return (
    <div className="row justify-content-md-center price-grid mt-1 mb-5">
      <div className="col-lg-2 price-grid-pink mx-3 my-2">
        <h2 className="price">$25</h2>
        <p className="price-description">SINGLE CLASS DROP-IN</p>
      </div>
      <div className="col-lg-2 price-grid-blue mx-3 my-2">
        <h2 className="price">$95</h2>
        <p className="price-description">5 CLASS DROP-IN</p>
      </div>
      <div className="col-lg-2 price-grid-pink mx-3 my-2">
        <h2 className="price">$190</h2>
        <p className="price-description">10 CLASS DROP-IN</p>
      </div>
      <div className="w-100"></div>
      <div className="col-lg-2 price-grid-blue mx-3 my-2">
        <h2 className="price">$370</h2>
        <p className="price-description">20 CLASS DROP-IN</p>
      </div>
      <div className="col-lg-2 price-grid-pink mx-3 my-2">
        <h2 className="price">$210</h2>
        <p className="price-description">1 MONTH UNLIMITED</p>
      </div>
      <div className="col-lg-2 price-grid-blue mx-3 my-2">
        <h2 className="price">$1800</h2>
        <p className="price-description">1 YEAR UNLIMITED</p>
      </div>
    </div>
  );
};

export default PriceGrid;
