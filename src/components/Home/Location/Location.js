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
    // console.log('marker: ', marker)
}

function Location() {
    return (
        <div style={{ backgroundColor: "#7C83FD" }}>
            <div className="container py-5">
                <div className="row d-flex align-items-center py-3">
                    <div className="col-12 col-md-6">
                        <h2 className="fst-italic fw-light">Our location</h2>
                        <hr />
                        <h4>House #34, Road #2</h4>
                        <h3>Baridhara DOHS R/A</h3>
                        <h3>Dhaka-1217, Bangladesh.</h3>
                    </div>
                    <div className="col-12 col-md-6">
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Location)