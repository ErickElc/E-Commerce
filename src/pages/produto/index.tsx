import { ContainerProduto, FlexContainer, ImageProduto, ProdutoComponent } from '../../styles/components';
import { IProducts } from '../../interfaces/products';
import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { apiBack_End } from '../../api/api';
import {useParams} from 'react-router-dom';
export default function Produto(){
    const [produto, setProduto] = useState< IProducts | null>();
    const [input, setInput] = useState({
        cep: ''
    })
    const {id} = useParams();
    useEffect(()=>{
        apiBack_End.get('api/products/list/' + id)
        .then((res)=>{
            setProduto(res.data);
        }).catch((err) => {
            console.log(err);
        })
    },[id]);
    let produtoValue = (produto?.value) ? parseInt(produto.value) : 0;
    return (
        <ContainerProduto>
            <ProdutoComponent>
                <div className='flex'>
                    <ImageProduto src={produto?.url_image} alt={produto?.name}/>
                    <FlexContainer className='flex-column ml-2 max-h-72'>
                        <h3 className='text-gray-700 font-bold text-1xs line-through'>R$ {
                            (produtoValue * 2).toFixed(2)
                        }</h3>
                        <h2 className='text-orange-500 font-bold text-4xl mb-4'>R$ {(produtoValue).toFixed(2)}</h2>
                        <Button variant="contained" className="inputs" type="submit" color="error">Comprar</Button>
                        <span className='mt-3'></span>
                        <Button variant="outlined" className="inputs mb-10" type="submit" color="error">Adicionar ao Carrinho</Button>
                    </FlexContainer>
                </div>
                <div>
                    <h1 className="text-3xl text-gray-700 mt-5">{produto?.name}</h1>
                </div>
                    <ProdutoComponent>
                        <form>
                            <TextField
                                fullWidth
                                id="filled-basic"
                                variant="filled"
                                color="warning"
                                inputProps={{ maxLength: 9 }}
                                type="text"
                                label="Digite seu Cep"
                                value={input.cep}
                                onChange={(e) => (setInput(prev => ({...prev, cep: e.target.value})))}
                                InputProps={{
                                    endAdornment: (
                                        <Button variant="contained" type="submit">Verificar</Button>
                                    )
                                }}
                            >
                            </TextField>
                        </form>
                    </ProdutoComponent>
            </ProdutoComponent>
        </ContainerProduto>
    )
}