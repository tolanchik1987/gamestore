import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import About from './components/about/about';
import Cart from './components/cart/cart';
import Navbar from './components/store/header/navbar/navbar';

function App() {
  return (
    <div className="conteiner_page">
      	<header className="conteiner_header">
        	<Navbar />
      	</header>
	  	<div>
      		<Routes>
				<Route path="/about" element={<About />}/>
				<Route path="/cart" element={<Cart />}/>
			</Routes>
		</div>
      	<footer>
      	</footer>
    </div>
  );
}

export default App;
