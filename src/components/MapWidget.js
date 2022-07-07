import "../styles/MapWidget.css";

const MapWidget = () => {
  return (
    <div className="map-responsive">
      <iframe
        // height="400"
        // width="520"
        // height="100%"
        // width="100%"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Av%20Paseo%20de%20la%20Marina%20121,%20Marina%20Vallarta%20Puerto%20Vallarta+(Yoga%20Studio)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
      <script
        type="text/javascript"
        src="https://embedmaps.com/google-maps-authorization/script.js?id=e4a3c8040d096a6ec9cd3f13cad4808b1e1391d9"
      ></script>
    </div>
  );
};

export default MapWidget;
