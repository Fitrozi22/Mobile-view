// //File utama project react
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import LoginPage from './pages/login.jsx'
// import RegisterPage from './pages/register.jsx'
// // import ProductsPage from './pages/products.jsx'
// // // import ProfilePage from './pages/profile.jsx'
// // import DetailProductPage from './pages/detailProduct.jsx'
// import ErrorPage from './pages/404.jsx'
// import { Provider } from 'react-redux'
// import store from './redux/store'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <div>Hello</div>,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: '/register',
//     element: <RegisterPage />
//   },
//   // {
//   //   path: '/products',
//   //   element: <ProductsPage />
//   // },
//   // {
//   //   path: '/profile',
//   //   element: <ProfilePage />
//   // },
//   // {
//   //   path: '/product/:id',
//   //   element: <DetailProductPage />
//   // },
//   {
//     path: '/login',
//     element: <LoginPage />
//   },
//   {
//     path: '/register',
//     element: <RegisterPage />
//   }, 
//   {
//     path: '/promo',
//     element: <PromoBannerScreen />
//   },
//   {
//     path: '/address',
//     element:  <AddressAndDestinationInput />
//   },
//   {
//     path: 'chekout',
//     element: <CheckoutScreen />
//   }
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <RouterProvider router={router} />
//     </Provider>
//   </React.StrictMode>,
// )

//File utama project react
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'
// import ProductsPage from './pages/products.jsx'
// import ProfilePage from './pages/profile.jsx';
// import DetailProductPage from './pages/detailProduct.jsx';
import ErrorPage from './pages/404.jsx';
import { Provider } from 'react-redux';
import store from './redux/store';
import PromoBannerScreen from './pages/promo';
import AddressAndDestinationInput from './pages/addres';
import CheckoutScreen from './pages/checkout'
import Success from './pages/success'


const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello</div>,
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  }, 
  {
    path: '/promo',
    element: <PromoBannerScreen />
  },
  {
    path: '/address',
    element:  <AddressAndDestinationInput />
  },
  {
    path: '/chekout',
    element: <CheckoutScreen />
  },
  {
    path: '/success',
    element: <Success />
  }
    
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)