import { GameType } from "../types/type";

export const getCartFromLS = () => {
    const data: string | null = localStorage.getItem('cart');
    const dataTotalPrice: string | null = localStorage.getItem('cartTotalPrice')
    const items: GameType[] =  data ? JSON.parse(data) : [] 
    const totalPrice: number = dataTotalPrice ? JSON.parse(dataTotalPrice) : 0
    if (items.length && totalPrice > 0) {
      return {
         items,
         totalPrice,
      }
 }
}