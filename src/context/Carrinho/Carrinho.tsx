import { getProdutosLocalStorage, setProdutosLocalStorage } from "./util";
import { ICarrinhoProvider, IContextCarrinho } from "./ICarrinho";
import {  IProducts } from "../../interfaces/interfaces";
import { createContext, useContext } from "react";
import { apiBack_End } from "../../api/api";
import { useState, useEffect } from 'react';

export const CarrinhoContext = createContext<IContextCarrinho>( {} as IContextCarrinho);

export const CarrinhoProvider = ({children} : ICarrinhoProvider) => {
    const [listItems, setListItems] = useState<IProducts[]>([]);
    const List = getProdutosLocalStorage();
    useEffect(()=>{
        const List = getProdutosLocalStorage();   
        if(List){
            setListItems(List);
        }
    },[])
    const aumentar_quantidade = (idCarrinho: String | undefined) => {
        for(let i in List){
            if(List[i]?.idCarrinho === idCarrinho){
                List[i].quantidade++
                
            }
        }
        setListItems(List);
        setProdutosLocalStorage(List);
    }
    const diminuir_quantidade = (idCarrinho: String | undefined) =>{
        for(let i in List){
            if(List[i]?.idCarrinho === idCarrinho){
                List[i].quantidade--
                if(List[i].quantidade <= 0){
                    return Remove_Items(idCarrinho);
                }
            }
        }
        setListItems(List);
        setProdutosLocalStorage(List);
    }
    async function Add_Item(idProduto: String | undefined){
        
        for(let i in List){
            if(List[i]._id === idProduto){
                return null
            }        
        }
        try {
            const res = await apiBack_End.get('api/products/list/' + idProduto);
            const idCarrinho = Math.floor(Date.now() * Math.random()).toString(36);
            res.data.idCarrinho = idCarrinho;
            res.data.quantidade = 1;
            setListItems(prev => [...prev, res.data]);
            setProdutosLocalStorage(listItems.concat(res.data));
        } catch (error) {
            return null
        }
        return 200;
    }
    function Remove_Items(idCarrinho: String | undefined){
        setListItems(prev => prev.filter((item: IProducts) => item?.idCarrinho !== idCarrinho));
        setProdutosLocalStorage(listItems.filter((item: IProducts) => item?.idCarrinho !== idCarrinho));
        
        return true;
    }
    function Limpar_Carrinho(){
        setListItems([])
        setProdutosLocalStorage([]);
    }
    return <CarrinhoContext.Provider value={{...listItems,aumentar_quantidade, diminuir_quantidade, listItems, Add_Item, Remove_Items, Limpar_Carrinho}}> { [ children ] } </CarrinhoContext.Provider>   
}

export const useCarrinhoContext = () => {
    const context = useContext(CarrinhoContext);
    return context;
}
