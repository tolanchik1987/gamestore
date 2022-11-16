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
import FormOrder from "./components/formOrder/FormOrder";
const Catalog = React.lazy(
   /* webpackChunkName: "Catalog" */ () => import("./components/catalog/Catalog")
);
const Cart = React.lazy(
   /* webpackChunkName: "Cart" */ () => import("./components/cart/Cart")
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
                  <Route path="/gamestore" element={<HomePage />} />
                  <Route path="/catalog" element={<Catalog />} />
                  <Route path="/gamestore/catalog" element={<Catalog />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/gamestore/about" element={<About />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/gamestore/cart" element={<Cart />} />
                  <Route path="/gameInfo" element={<GameInfo />} />
                  <Route path="/gamestore/gameInfo" element={<GameInfo />} />
                  <Route path="/cart/order" element={<FormOrder />}/>
                  <Route path="/gamestore/cart/order" element={<FormOrder />} />
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
