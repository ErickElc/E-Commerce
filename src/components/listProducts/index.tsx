import { ContainerLista, ImgProdutos, ListComponent } from "../../styles/components";
import { IProducts } from "../../interfaces/products";
import { useEffect, useState } from "react";
import { apiBack_End } from "../../api/api";
import { Link } from 'react-router-dom';
export default function ListProducts(){
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        apiBack_End.get('api/products/list/all')
        .then((res)=>{
            setProducts(res.data)
        })
        .catch((err)=> {console.log(err)})
    },[])
    let randomProducts = [...products];
    randomProducts = randomProducts.sort(() => 0.5 - Math.random()).splice(0,6);
    return(
        <>
            {randomProducts?.map((item : IProducts) => (
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
        </>
    )

}