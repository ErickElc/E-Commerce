import {  ContainerLista, ContainerProdutos, ImgProdutos, ListComponent } from '../../styles/components';
import { Link } from 'react-router-dom';
import { IProducts } from '../../interfaces/interfaces';
import { useEffect, useState } from 'react';
import { apiBack_End } from '../../api/api';
export default function Produtos(){
    const [produtos, setProdutos] = useState< IProducts[] | null>([]);
    useEffect(()=>{
        apiBack_End.get('api/products/list/all')
        .then((res)=>{
            setProdutos(res.data)
        })
        .catch((err)=> {console.log(err)})
    },[])
    return (
        <div>
            <h1 className='text-center font-bold text-3xl mt-4' style={{color: '#E8630A'}}>Lista de Produtos</h1>
            <ContainerProdutos className='mt-10 flex-column'>
                {produtos?.map((item : IProducts) => (
                <ContainerLista key={item._id}>
                    <ListComponent key={item._id}>
                        <Link to={'/produtos/' + item._id}>
                            <ImgProdutos srcSet={item?.url_image} alt={item.name}/>
                            <span className="font-bold text-gray-700">{item.name}</span>
                            <p className='font-bold text-orange-600 text-2xl'>R$ <span>{parseInt(item.value).toFixed(2)}</span></p>
                        </Link>
                    </ListComponent>
                </ContainerLista>  
                ))}
            </ContainerProdutos>
        </div>
    )
}