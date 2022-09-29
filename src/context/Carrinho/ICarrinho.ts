import { IProducts } from "../../interfaces/interfaces";

export interface IContextCarrinho{
    Add_Item:  (idProduto: string | undefined) => Promise<Number | null> ;
    Remove_Items: (idProduto: string | undefined) => Boolean;
    listItems: IProducts[];
    Limpar_Carrinho: ()  => void;
}
export interface ICarrinhoProvider{
    children: JSX.Element;
}