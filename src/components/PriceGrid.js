import "../styles/PriceGrid.css";

const PriceGrid = () => {
  return (
    <div class="row justify-content-md-center price-grid mt-1 mb-5">
      <div class="col-lg-2 price-grid-pink mx-3 my-2">
        <h2 class="display-4">$25</h2>
        <p class="price-description">SINGLE CLASS DROP-IN</p>
      </div>
      <div class="col-lg-2 price-grid-blue mx-3 my-2">
        <h2 class="display-4">$95</h2>
        <p class="price-description">5 CLASS DROP-IN</p>
      </div>
      <div class="col-lg-2 price-grid-pink mx-3 my-2">
        <h2 class="display-4">$190</h2>
        <p class="price-description">10 CLASS DROP-IN</p>
      </div>
      <div class="w-100"></div>
      <div class="col-lg-2 price-grid-blue mx-3 my-2">
        <h2 class="display-4">$370</h2>
        <p class="price-description">20 CLASS DROP-IN</p>
      </div>
      <div class="col-lg-2 price-grid-pink mx-3 my-2">
        <h2 class="display-4">$210</h2>
        <p class="price-description">1 MONTH UNLIMITED</p>
      </div>
      <div class="col-lg-2 price-grid-blue mx-3 my-2">
        <h2 class="display-4">$1800</h2>
        <p class="price-description">1 YEAR UNLIMITED</p>
      </div>
    </div>
  );
};

export default PriceGrid;
