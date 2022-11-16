export type ErrorMessageType = {
   error: string,
}

export type GameType = {
   description: string,
   genres: string[],
   id: number,
   image: string,
   popular: boolean,
   price: number,
   sale: boolean,
   title: string,
   video: string,
   year: number
}

export type BtnPropsType = {
   game: GameType;
}

export type sortListType = {
   name: "цена меньше" | "цена больше" | "по алфавиту" | "сначала новые";
   order: "price&order=asc" | "price&order=desc" | "title" | "year&order=desc";
}[]

export type BodyClick = MouseEvent & {
   path: Node[];
}

export type GameItemPropsType = {
   game: GameType;
}

export type PaginationTypeProps = {
   currentPage: number;
   pageSize: number; 
   setCurrentPage: (page: number) => void;
   setPageSize: (pageSize: number) => void;
}

export type SearchPropsType = {
   value: string,
   onChangeSerachInput: (e:string) => void
   setValue: (e:string) => void
}

export type SearchCategoryPropsType = {
   category: string[],
   selectListItem: number,
   visibleList: boolean,
   setVisibleList: (visibleList:boolean) => void,
   onChangeCategory: (index: number) => void,
}

export type SortPropsType = {
   sortListSelect: number,
   sortList: {name: string, order: string}[],
   sortListView: boolean,
   onClickSelectSortValue: (index:number) => void,
}

export interface ICartSlice {
   gameInCart: GameType[];
   gameSelected: GameType;
   totalPrice: number;
}

export interface IOrder {
   orderData: GameType[];
   orderTotalPrice: number;
}

export interface ISearchCatalogSlice {
   categoryId: number,
}



