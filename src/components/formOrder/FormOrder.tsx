import React from "react";
import classes from "./FormOrder.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";
import { gameInCartSelector } from "../store/cartReducer/cartSlice";
import { GameType } from "../types/type";

type Inputs = {
   userName: string;
   firstName: string;
   tel: string;
};

const FormOrder = () => {
   const items: GameType[] = useSelector(gameInCartSelector);

   const {
      register,
      handleSubmit,
      reset,
      formState,
      formState: { errors, isValid },
   } = useForm<Inputs>({
      mode: "onChange",
   });

   const onSubmit: SubmitHandler<Inputs> = (data) => {
      alert(`Спасибо за заказ! Ваш заказ: ${items.map((i) => `"${i.title}"`, )}`);
     // dispatch(clearCart());
      console.log(data);
   }

   React.useEffect(() => {
      if (formState.isSubmitSuccessful) {
         reset({ userName: "", firstName: "", tel: "+7" });
      }
   }, [reset, formState]);

   return (
      <div className={classes.conteiner_form}>
         <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <h2>Введите свои данные для заказа:</h2>
            <input
               id={"userName"}
               autoComplete={"false"}
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
               autoComplete={"false"}
               placeholder={"Введите свой телефон"}
               defaultValue={"+7"}
               {...register("tel", {
                  required: "Ваш телефон обязателен!",
                  minLength: {
                     value: 12,
                     message: "Некорректный номер телефона!",
                  },
                  maxLength: {
                     value: 12,
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
   );
};
export default FormOrder;
