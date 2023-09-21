import React from 'react';
import Navbar from '../components/Navbar';

const CheckoutScreen = () => {
  return (
    <>
    <Navbar />
    <div className="bg-gray-100 h-screen mt-20">
      <div className="bg-white p-4 mb-5 text-blue-600 shadow-lg rounded-t-lg">
        <h1 className="text-2xl font-semibold">Pemesanan</h1>
      </div>
      <div className="bg-white p-4 shadow-lg rounded-b-lg">
        {/* Konten Pemesanan */}
        <div className="flex items-center mb-4 m-5">
          <img
            src="./images/taxi.jpg"
            alt="Produk"
            className="rounded-lg w-16 h-16 mr-4"
          />
          <div>
            <h2 className="text-lg font-semibold">Taxi</h2>
            <p className="text-gray-600">Perjalanan dari Jakarta ke Jogja</p>
            <p className="text-green-600 font-semibold">Harga: $100</p>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-4">
          <div className="flex justify-between">
            <p className="text-lg">Total:</p>
            <p className="text-xl font-semibold">$100</p>
          </div>
          <button className="bg-blue-500 text-white rounded-full px-6 py-2 mt-4 hover:bg-blue-600">
            Bayar Sekarang
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default CheckoutScreen;
