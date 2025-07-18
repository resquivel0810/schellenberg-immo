import { GoogleMap, useLoadScript} from '@react-google-maps/api';

import demoFancyMapStyles from "./MapStyle.json";

const libraries = ['places'];
// const mapContainerStyle = 
const center = {
  lat: 47.2455181, // default latitude
  lng: 8.656114, // default longitude 
};

const Map = ({mapWidth, mapHeight}) => {
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
        mapContainerStyle={
          {
            width: mapWidth,
            height: mapHeight,
          }
        }
        zoom={14}
        center={center}
        options={{
            styles: demoFancyMapStyles,
            disableDefaultUI: true,
        }}>
        {/* <Marker position={center} /> */}
      </GoogleMap>
    </div>
  );
};

export default Map;


