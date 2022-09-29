import { ContainerPrazos, ContainerProduto, FlexContainer, ImageProduto, LayoutProduto, ProdutoComponent, SpanEntrega } from '../../styles/components';
import { IProducts } from '../../interfaces/products';
import { IEntrega } from '../../interfaces/entrega';
import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { apiBack_End } from '../../api/api';
import {useParams} from 'react-router-dom';
export default function Produto(){
    const [produto, setProduto] = useState< IProducts | null>();
    const [input, setInput] = useState({
        cep: ''
    })
    const [data, setData] = useState<IEntrega | null>()
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

    async function VerificarValor(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const res = await apiBack_End.get(`api/entregas/valor/${input.cep}`)
            console.log(res.data)
            setData(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <ContainerProduto>
            <ProdutoComponent className='mb-10'>
                <LayoutProduto>
                    <ImageProduto src={produto?.url_image} alt={produto?.name}/>
                    <FlexContainer className='flex-column ml-2'>
                        <h3 className='text-gray-700 font-bold text-1xs line-through'>R$ {
                            (produtoValue * 2).toFixed(2)
                        }</h3>
                        <h2 className='text-orange-500 font-bold text-4xl mb-2'>R$ {(produtoValue).toFixed(2)}</h2>
                        <Button fullWidth variant="contained" className="inputs" type="submit" color="error">Comprar</Button>
                        <span className='mt-3'></span>
                        <Button fullWidth variant="outlined" className="inputs mb-10" type="submit" color="error">Adicionar ao Carrinho</Button>
                    </FlexContainer>
                </LayoutProduto>
                <div>
                    <h1 className="text-3xl text-gray-700 mt-5">{produto?.name}</h1>
                </div>
                    <ProdutoComponent>
                        <form onSubmit={VerificarValor}>
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
                        {(data?.Valor && data?.PrazoEntrega) ?
                        <ContainerPrazos >
                            <p className='m-5 font-bold'>
                                Valor:
                            <SpanEntrega >R$:{data?.Valor}</SpanEntrega>
                            </p>
                            <p className='m-5 font-bold'>
                                Prazo de Entrega:
                                <SpanEntrega>em até {(!data?.PrazoEntrega) ? 'Indefinido' : data?.PrazoEntrega} dias</SpanEntrega>
                            </p>
                        </ContainerPrazos>: ''
                        }
                    </ProdutoComponent>
                <div>
                    <h1 className="text-xl text-gray-700 mt-5">Descrição: {produto?.description}</h1>
                </div>
            </ProdutoComponent>
        </ContainerProduto>
    )
}