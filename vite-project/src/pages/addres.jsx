import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -6.2088, 
  lng: 106.8456, 
};

function AddressAndDestinationInput() {
  const [fromAddress, setFromAddress] = useState('');
  const [toAddress, setToAddress] = useState('');
  const [directions, setDirections] = useState(null);

  const onMapLoad = (map) => {

  };

  const onDirectionsLoad = (result) => {
    setDirections(result);
  };

  return (
    <>
    <Navbar />
    <div className="container mx-auto p-4 mt-20">
      <h1 className="text-3xl font-semibold mb-4 text-blue-600">Pemesanan</h1>
      <div className="mb-4">
        <input
          className="w-full border rounded py-2 px-3"
          type="text"
          placeholder="Dari"
          value={fromAddress}
          onChange={(e) => setFromAddress(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          className="w-full border rounded py-2 px-3"
          type="text"
          placeholder="Tujuan"
          value={toAddress}
          onChange={(e) => setToAddress(e.target.value)}
        />
      </div>
      <button className="bg-blue-500 text-white rounded px-6 py-2 mt-4 hover:bg-blue-600 mb-10">
            Order
      </button>
      <div className="mb-4">
        <LoadScript googleMapsApiKey="">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            onLoad={onMapLoad}
          >
            {directions && (
              <DirectionsRenderer
                directions={directions}
                options={{
                  polylineOptions: {
                    strokeColor: '#00aaff',
                  },
                }}
              />
            )}
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
    
    </>
  );
}

export default AddressAndDestinationInput;
