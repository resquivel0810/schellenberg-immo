import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

import demoFancyMapStyles from "./MapStyle.json";

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '1000px',
};
const center = {
  lat: 47.255528946311244, // default latitude
  lng: 8.647772878833043, // default longitude 
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyC2JLjZLwlCghrdi8uK9LWD_UDyB3hCjoo',
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
        options={{
            styles: demoFancyMapStyles,
            disableDefaultUI: true,
        }}>
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default Map;