import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import About from './components/about/about';
import Cart from './components/cart/Cart';
import Catalog from './components/catalog/catalog';
import Navbar from './components/header/navbar/navbar';

function App() {
  return (
    <div className="conteiner__page">
      	<header className="conteiner__header">
        	<Navbar />
      	</header>
	  	<main className="conteiner__content">
      		<Routes>
				<Route path="/home" element={<Catalog />} />
				<Route path="/catalog" element={<Catalog />}/>
				<Route path="/about" element={<About />}/>
				<Route path="/cart" element={<Cart />}/>
			</Routes>
		</main>
      	<footer className="conteiner__footer">
			Footer
      	</footer>
    </div>
  );
}

export default App;
