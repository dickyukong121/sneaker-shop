import React, { Component, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component.jsx';

import HomePage from './pages/homepage/homepage.component';
import SneakersShop from './pages/sneakers/sneakers.component';
import Authentication from './pages/authentication/authentication.component';
import Checkout from './pages/checkout/checkout.component';
import Chatroom from './pages/chatroom/chatroom.component';
import { setCurrentUser } from './store/user/user.action';
import { useDispatch } from 'react-redux';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from './utils/firebase/firebase.utils';
import { setCategoriesMap } from './store/categories/categories.action';
import { getCategoriesAndDocuments } from './utils/firebase/firebase.utils';
import apis from './api/api';
import { setCartItems } from './store/cart/cart.action';
console.log(process.env.REACT_APP_WEATHER_API_KEY)

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const subscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      console.log('ftf')
      dispatch(setCurrentUser(user));
    });

    return subscribe;
  }, [dispatch]);



  return (
    <div >
      <Header />
      <div style={{ marginTop: '190px' }}>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/sneakers/*' element={<SneakersShop />} />
          <Route path='/signin' element={<Authentication />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/chatroom' element={<Chatroom />} />
        </Routes>

      </div>
    </div>

  )
}
// class App extends Component {
//   render() {
//     return <div className='App'>
//       <Homepage />      
//       </div>;
//   }
// }

export default App;
