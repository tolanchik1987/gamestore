import React, { useState } from "react";
import classes from "./Catalog.module.scss";
import GameItem from "./gameItem/GameItem";
import { useDispatch } from "react-redux";
import { getViewCatalog } from "../store/catalogReducer/catalogSlice";

const GAMES = [
   {
      image: "https://cdn.akamai.steamstatic.com/steam/apps/1949472/capsule_616x353.jpg?t=1652363918",
      title: "Forza Horizon 5",
      genres: ["Гонки", "Симулятор", "Открытый мир"],
      price: 2343,
      video: "https://www.youtube.com/embed/FYH9n37B7Yw",
      id: 1,
      description:
         "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
   },
   {
      image: "https://media.contentapi.ea.com/content/dam/battlefield/battlefield-2042/videos/2021/06/trailer-ru.youtube/subassets/poster.jpg.adapt.crop16x9.1920w.jpg",
      title: "Battlefield 2042",
      genres: ["Экшен", "Шутер", "Война"],
      video: "https://www.youtube.com/embed/ASzOzrB-a9E",
      price: 2433,
      id: 2,
      description:
         "Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.",
   },
   {
      image: "https://cdn.akamai.steamstatic.com/steam/apps/936790/capsule_616x353.jpg?t=1659101472",
      title: "Life is Strange True Colors",
      genres: ["Глубокий сюжет", "Протагонистка"],
      video: "https://www.youtube.com/embed/b6CkzwVAr0M",
      price: 3021,
      id: 3,
      description:
         "Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.",
   },
   {
      image: "https://hyperpc.ru/images/support/articles/pc-for-gta-5/article-gta-5-banner.jpg",
      title: "Grand Theft Auto V",
      genres: ["Открытый мир", "Экшен"],
      video: "https://www.youtube.com/embed/QkkoHAzjnUs",
      price: 789,
      id: 4,
      description:
         "Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.",
   },
   {
      image: "https://cdn.cloudflare.steamstatic.com/steam/apps/377560/capsule_616x353.jpg?t=1450287062",
      title: "Tom Clancy's Rainbow Six® Siege",
      video: "https://www.youtube.com/embed/6wlvYh0h63k",
      genres: ["Тактика", "Шутер"],
      price: 982,
      id: 5,
      description:
         "Tom Clancy's Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.",
   },
   {
      image: "https://cdn-ext.fanatical.com/production/product/1280x720/a578d037-012f-4cf9-ad35-5908e4eec705.jpeg",
      title: "Assassin’s Creed Valhalla",
      genres: ["Паркур", "РПГ", "Открытый мир"],
      video: "https://www.youtube.com/embed/ssrNcwxALS4",
      price: 2863,
      id: 6,
      description:
         "Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.",
   },
];

const Catalog = () => {
   const dispatch = useDispatch();
   const [viewCatalog, setViewCatalog] = useState(true);
 
   const handlerClickViewCatalog = () => {
      setViewCatalog(!viewCatalog);
      dispatch(getViewCatalog(viewCatalog));
   };

   return (
      <div className={classes.conteiner__catalog}>
         <button onClick={handlerClickViewCatalog}>
            {!viewCatalog ? "Показать игры" : "Скрыть игры"}
         </button>
         <div className={classes.conteiner__catalog_game}>
            {viewCatalog &&
               GAMES.map((game) => <GameItem game={game} key={game.id} />)}
         </div>
      </div>
   );
};

export default Catalog;
