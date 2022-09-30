import React, { useState } from "react";
import GameItem from "../catalog/gameItem/GameItem";
import classes from "./HomePage.module.scss";

const GAMES = [
   {
      image: "https://cdn.akamai.steamstatic.com/steam/apps/1949472/capsule_616x353.jpg?t=1652363918",
      title: "ForzaHorizon 5",
      genres: ["Гонки", "Симулятор", "Открытый мир"],
      price: 2343,
      video: "https://www.youtube.com/embed/FYH9n37B7Yw",
      id: 1,
      year: 2022,
      popular: true,
      sale: true,
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
      year: 2018,
      popular: true,
      sale: false,
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
      year: 2022,
      popular: false,
      sale: false,
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
      year: 2012,
      popular: false,
      sale: false,
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
      year: 2019,
      popular: false,
      sale: false,
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
      year: 2022,
      popular: false,
      sale: false,
      description:
         "Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.",
   },
];

const HomePage = () => {
   const [visiblePopular, setVisiblePopular] = useState(false);
   const [visibleNewGame, setVisibleNewGame] = useState(false);
   const [visibleSaleGame, setVisibleSaleGame] = useState(false);

   const handleClickPopularGame = () => {
      setVisiblePopular(true);
      setVisibleNewGame(false);
      setVisibleSaleGame(false);
   };

   const handleClickNewGame = () => {
      setVisiblePopular(false);
      setVisibleNewGame(true);
      setVisibleSaleGame(false);
   };

   const handleClickSaleGame = () => {
      setVisiblePopular(false);
      setVisibleNewGame(false);
      setVisibleSaleGame(true);
   };

   return (
      <div className={classes.conteiner__homePage}>
         <h2>Wellcom game store!</h2>
         <div className={classes.listItem}>
            <ul>
               <li onClick={handleClickNewGame}>Новинки</li>
               <li onClick={handleClickPopularGame}>Популярные</li>
               <li onClick={handleClickSaleGame}>Скидки</li>
               <li>Категории</li>
            </ul>
         </div>
         <div className={classes.contentHomePage}>
            {GAMES.map((game) => (
               <img key={game.id} src={game.image} alt="" />
            ))}
         </div>
         <div className={classes.contentGame}>
            {visiblePopular &&
               GAMES.map((game) =>
                  game.popular === true ? (
                     <GameItem game={game} key={game.id} />
                  ) : null
               )}
         </div>
         <div className={classes.contentGame}>
            {visibleNewGame &&
               GAMES.map((game) =>
                  game.year > 2020 ? (
                     <GameItem game={game} key={game.id} />
                  ) : null
               )}
         </div>
         <div className={classes.contentGame}>
            {visibleSaleGame &&
               GAMES.map((game) =>
                  game.sale === true ? (
                     <GameItem game={game} key={game.id} />
                  ) : null
               )}
         </div>
      </div>
   );
};

export default HomePage;
