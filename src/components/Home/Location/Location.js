import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const position = {
    lat: 23.8103,
    lng: 90.4125
};

const onLoad = marker => {
    console.log('marker: ', marker)
}

function Location() {
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyA-8wj4YLpTGyT6qWWsEeFCczUOz3tqw_Q"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={position}
                zoom={15}
            >
                <Marker
                    onLoad={onLoad}
                    position={position}
                />
                <></>
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Location)