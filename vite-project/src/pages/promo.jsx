import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

function PromoCard({ promo }) {
  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <img src={promo.img.url} alt={promo.nama} className="w-full h-auto mb-2 rounded-lg" />
      <h2 className="text-xl font-semibold text-gray-800">{promo.nama}</h2>
      <p className="text-gray-600">{promo.desc}</p>
    </div>
  );
}

function PromoBannerScreen() {
  const [promoData, setPromoData] = useState([]);

  useEffect(() => {
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk1MTc4MzAyLCJleHAiOjE2OTc3NzAzMDJ9.hdqucL6d_M6jyoelCXYQnOHbOHEVnDebPw7y9Kz0ETs'
    axios
      .get('https://content.digi46.id/promos', {
        headers: {
            'Authorization': `Bearer ${authToken}`
        }
      })
      .then((res) => {
        setPromoData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  

  return (
    <>
    <Navbar />
    <div className="promo-banner-screen p-5 mt-10 md:mt-20">
      <h1 className="text-3xl font-bold mt-10 mb-7 text-blue-600 ">Promo Banner</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {promoData.map((promo) => (
          <PromoCard key={promo.id} promo={promo} />
        ))}
      </div>
    </div>
    </>
  );
}

export default PromoBannerScreen;
