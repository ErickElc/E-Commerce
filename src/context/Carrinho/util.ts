import { IProducts } from "../../interfaces/interfaces";
export const setProdutosLocalStorage = (produtos: IProducts[] | number | null) =>{
    localStorage.setItem('carrinho', JSON.stringify(produtos));
}
export const getProdutosLocalStorage = () => {
    const json = localStorage.getItem('carrinho')
    if(!json) return null;
    const produto = JSON.parse(json);
    return produto ?? null;
}