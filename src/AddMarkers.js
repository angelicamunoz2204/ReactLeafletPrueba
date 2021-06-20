import React, { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";

const AddMarkers = ({onOpen}) => {
  const [markers, setMarkers] = useState([
    {
      lat: 7.11392,
      lng: -73.1198
    }
  ]);

  const [popUp, setPopUp] = useState(false);


  const map = useMapEvents({
    click: (e) => {
      setMarkers([...markers, e.latlng]);
      console.log(e.latlng);
      onOpen();
    }
  });
  return (
    <div>
      {markers.map((marker, i) => (
        <Marker key={`marker-${i}`} position={marker}>

        </Marker>
      ))} 
    </div>
  );
};

export default AddMarkers;
