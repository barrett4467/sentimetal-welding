import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
    width: "400px",
    height: "400px"
}
const center = {
    lat: 40.39809967957711,
    lng: -105.04605933861734
};

function Map() {
    const { isLoaded } = useJsApiLoader({
        id:"google-map-script",
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
    });
    const [map, setMap] = React.useState(null);
    const onLoad = React.useCallback(function callback(map){
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map);

    }, []);

    // const unMount = React.useCallback(function callback(map) {
    //     setMap(null);
    // }, []);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={{center}}
            onLoad={onLoad}
            zoom={17}
            // onUnmount={unMount}
        >

        </GoogleMap>
    ) : <></>
};

export default React.memo(Map);