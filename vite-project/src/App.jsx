//MEMBUAT SEBUAH KOMPONEN DI DALAM SEBUAH REACT (MENGGUNAKAN FUNCTIONAL KOMPONENT MAUPUN MENGGUNAKAN CLASS KOMPONEN)
import React from 'react';
import LoginPage from './pages/login'; 
// import RegisterPage from './pages/register';

function App() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <LoginPage />
      {/* <RegisterPage /> */}
    </div>
  )
}


export default App;
//Penjelasan Saja
//Penjelasan Atomic Design menggunakan react
//1.Memanggil register page berarti kita masuk ke folder pages register.jsx