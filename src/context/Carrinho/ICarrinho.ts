import { IProducts } from "../../interfaces/interfaces";

export interface IContextCarrinho{
    Add_Item:  (idProduto: string | undefined) => Promise<Number | null>;
    Remove_Items: (idCarrinho: string | undefined) => Boolean;
    listItems: IProducts[];
    Limpar_Carrinho: ()  => void;
    aumentar_quantidade: (idCarrinho: string | undefined) => void;
    diminuir_quantidade: (idCarrinho: string | undefined) => void;
}
export interface ICarrinhoProvider{
    children: JSX.Element;
}