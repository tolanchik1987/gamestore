import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./components/about/About";
import Cart from "./components/cart/Cart";
import Catalog from "./components/catalog/Catalog";
import GameInfo from "./components/catalog/gameInfo/GameInfo";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomePage from "./components/homePage/HomePage";
import PageNotFound from "./components/pageNotFound/PageNotFound";

const App = () => {
   return (
      <div className="conteiner__page">
         <header className="conteiner__header">
            <Header />
         </header>
         <main className="conteiner__content">
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/home" element={<HomePage />} />
               <Route path="/catalog" element={<Catalog />} />
               <Route path="/about" element={<About />} />
               <Route path="/cart" element={<Cart />} />
               <Route path="/GameInfo" element={<GameInfo />} />
               <Route path="*" element={<PageNotFound />} />
            </Routes>
         </main>
         <footer className="conteiner__footer">
            <Footer />
         </footer>
      </div>
   );
};

export default App;
