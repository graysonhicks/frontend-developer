const { compose } = require("recompose");
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MapWithAMarker = compose(
      withScriptjs,
      withGoogleMap
    )(props =>
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
      >
        <Marker
          position={{ lat: -34.397, lng: 150.644 }}
        />
      </GoogleMap>
    );
