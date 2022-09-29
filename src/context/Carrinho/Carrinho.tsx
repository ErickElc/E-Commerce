import { getProdutosLocalStorage, setProdutosLocalStorage } from "./util";
import { ICarrinhoProvider, IContextCarrinho } from "./ICarrinho";
import {  IProducts } from "../../interfaces/interfaces";
import { createContext, useContext } from "react";
import { apiBack_End } from "../../api/api";
import { useState, useEffect } from 'react';

export const CarrinhoContext = createContext<IContextCarrinho>( {} as IContextCarrinho);

export const CarrinhoProvider = ({children} : ICarrinhoProvider) => {
    const [listItems, setListItems] = useState<IProducts[]>([]);
    useEffect(()=>{
        const List = getProdutosLocalStorage();   
        if(List){
            setListItems(List);
        }
    },[])
    async function Add_Item(idProduto: String | undefined){
        try {
            const res = await apiBack_End.get('api/products/list/' + idProduto);
            setListItems(prev => [...prev, res.data])
            setProdutosLocalStorage(listItems.concat(res.data));
            
        } catch (error) {
            return null
        }
        return 200;
    }
    function Remove_Items(idProduto: String | undefined){
        setListItems(prev => prev.filter((item: IProducts) => item._id !== idProduto));
        setProdutosLocalStorage(listItems.filter((item: IProducts) => item._id !== idProduto));
        
        return true;
    }
    function Limpar_Carrinho(){
        setListItems([])
        setProdutosLocalStorage([]);
    }
    return <CarrinhoContext.Provider value={{...listItems, listItems, Add_Item, Remove_Items, Limpar_Carrinho}}> { [ children ] } </CarrinhoContext.Provider>   
}

export const useCarrinhoContext = () => {
    const context = useContext(CarrinhoContext);
    return context;
}
