import React from "react";
import classes from "./FormOrder.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
   clearCart,
   deleteGameInCart,
   gameInCartSelector,
   setTotalPrice,
   totalPriceSelector,
} from "../store/cartReducer/cartSlice";
import { clearOrder, deleteGameInOrder, setOrderData, setOrderTotalPrice } from "../store/orderReducer/orderSlice";
import { FormInputsType, GameType } from "../types/type";
import { useNavigate } from "react-router-dom";

const FormOrder: React.FC = () => {
   const items: GameType[] = useSelector(gameInCartSelector);
   const totalPrice = useSelector(totalPriceSelector);
   const isMounted = React.useRef(false);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const {
      register,
      handleSubmit,
      reset,
      formState,
      formState: { errors, isValid },
   } = useForm<FormInputsType>({
      mode: "onChange",
   });

   const onSubmit: SubmitHandler<FormInputsType> = (data) => {
      alert(`Спасибо за заказ! Ваш заказ: ${items.map((i) => `"${i.title}"`)}`);
      dispatch(setOrderData(data));
      dispatch(clearCart());
      dispatch(clearOrder());
      navigate("/catalog");
   };
   
   React.useEffect(()=> {
      if (isMounted.current) {
         const localStorageData = JSON.stringify(items);
         const localStorageTotalPrice = JSON.stringify(totalPrice);
         localStorage.setItem('cart', localStorageData);
         localStorage.setItem('cartTotalPrice', localStorageTotalPrice);
      }
      isMounted.current = true;
   }, [items,totalPrice])

   React.useEffect(() => {
      if (formState.isSubmitSuccessful) {
         reset({ userName: "", firstName: "", tel: "+7" });
      }
   }, [reset, formState]);

   React.useEffect(() => {
      dispatch(setTotalPrice(items.reduce((acc, game) => acc + game.price, 0)));
      dispatch(setOrderTotalPrice(totalPrice));
   }, [items,totalPrice]);

   const handleClick = (id:number) => {
      dispatch(deleteGameInCart(id));
      dispatch(deleteGameInOrder(id));
   }

   return (
      <div className={classes.wrapper__form}>
         <div className={classes.conteiner__form}>
            <div className={classes.conteiner_title_price}>
               <h2>Ваш заказ:</h2>
               <span>Oбщая сумма: {totalPrice} руб.</span>
            </div>
            {items.map((item) => (
               <div className={classes.form_order__games}>
                  <span>{item.title}</span>
                  <span>-</span>
                  <span>{item.price} руб.</span>
                  <span className={classes.delete__game} onClick={()=>handleClick(item.id)}>Удалить </span>
               </div>
            ))}
         </div>
         <div className={classes.conteiner__form}>
            <form
               id={"formOreder"}
               className={classes.form}
               onSubmit={handleSubmit(onSubmit)}
            >
               <h2>Введите свои данные для заказа:</h2>
               <input
                  id={"userName"}
                  autoComplete="false"
                  placeholder={"Введите свое имя"}
                  {...register("userName", {
                     required: "Ваше имя обязательно!",
                     minLength: {
                        value: 5,
                        message: "Минимум 5 символов в имени!",
                     },
                     maxLength: {
                        value: 20,
                        message: "Максимум 20 символов в имени!",
                     },
                  })}
               />

               <input
                  id={"firstName"}
                  autoComplete="false"
                  placeholder={"Введите свою фамилию"}
                  {...register("firstName", {
                     required: "Ваша фамилия обязательна!",
                     minLength: {
                        value: 5,
                        message: "Минимум 5 символов фамилии!",
                     },
                     maxLength: {
                        value: 20,
                        message: "Максимум 20 символов фамилии!",
                     },
                  })}
               />

               <input
                  id={"tel"}
                  autoComplete="false"
                  placeholder={"Введите свой телефон"}
                  defaultValue={"+7"}
                  {...register("tel", {
                     required: "Ваш телефон обязателен!",
                     pattern: {
                        value: /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
                        message: "Некорректный номер телефона!",
                     },
                  })}
               />

               {errors?.userName && (
                  <span className={classes.error}>
                     {errors?.userName?.message || "Error!"}
                  </span>
               )}

               {errors?.firstName && (
                  <span className={classes.error}>
                     {errors?.firstName?.message || "Error!"}
                  </span>
               )}

               {errors?.tel && (
                  <span className={classes.error}>
                     {errors?.tel?.message || "Error!"}
                  </span>
               )}

               <input
                  className={
                     !isValid
                        ? classes.btn_submit_disabled
                        : classes.btn_submit_enabled
                  }
                  type="submit"
                  disabled={!isValid}
               />
            </form>
         </div>
      </div>
   );
};
export default FormOrder;
