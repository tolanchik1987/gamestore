import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import GameInfo from "./components/catalog/gameInfo/GameInfo";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomePage from "./components/homePage/HomePage";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import "./App.scss";
import PreLoader from "./components/loading/PreLoader";
const Catalog = React.lazy(
   /*webpackChankName: "Catalog"*/ () => import("./components/catalog/Catalog")
);
const Cart = React.lazy(
   /*webpackChankName: "Cart"*/ () => import("./components/cart/Cart")
);

const App: React.FC = () => {
   return (
      <div className="conteiner__page">
         <header className="conteiner__header">
            <Header />
         </header>
         <main className="conteiner__content">
            <React.Suspense fallback={<PreLoader />}>
               <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/home" element={<HomePage />} />
                  <Route path="/catalog" element={<Catalog />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/GameInfo" element={<GameInfo />} />
                  <Route path="*" element={<PageNotFound />} />
               </Routes>
            </React.Suspense>
         </main>
         <footer className="conteiner__footer">
            <Footer />
         </footer>
      </div>
   );
};

export default App;
