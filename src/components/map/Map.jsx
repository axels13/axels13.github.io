import React, { useEffect, useState } from "react";
import GoogleMaps from "simple-react-google-maps";
const Map = () => {
  return (
    <div>
      <div className="map-card">
        <h1>Find Us</h1>
        <GoogleMaps
          apiKey={"AIzaSyA3CGAQ4js9uD_ltTZeQeisLyuOR9Uugts"}
          style={{ height: "500px", width: "670px" }}
          zoom={10}
          center={{ lat: 40.423765, lng: -3.664428 }}
          markers={[{ lat: 40.423765, lng: -3.664428 }]}
          className="maps"
        ></GoogleMaps>
      </div>
    </div>
  );
};

export default Map;
