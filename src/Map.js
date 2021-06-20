import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import AddMarkers from "./AddMarkers";

const Map = ({onOpen}) => {
  return (
    <MapContainer
      doubleClickZoom={false}
      id="mapId"
      zoom={14}
      center={{
        lat: 7.11392,
        lng: -73.1198
      }}
    >
    <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <AddMarkers onOpen = {onOpen}/>
    </MapContainer>
  );
};

export default Map;
