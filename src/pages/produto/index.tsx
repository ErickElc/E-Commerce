import { ContainerPrazos, ContainerProduto, DivDescription, FlexContainer, ImageProduto, LayoutProduto, ProdutoComponent, SpanEntrega } from '../../styles/components';
import { useCarrinhoContext } from '../../context/Carrinho/Carrinho';
import { useParams, useNavigate} from 'react-router-dom';
import { IProducts } from '../../interfaces/interfaces';
import { IEntrega } from '../../interfaces/interfaces';
import { Button, TextField } from '@mui/material';
import { useAuthContext } from '../../auth/auth';
import { useEffect, useState } from 'react';
import { apiBack_End } from '../../api/api';
export default function Produto(){
    const {id} = useParams();
    const auth = useAuthContext();
    const navigate = useNavigate();
    const produtosContext = useCarrinhoContext();
    const [data, setData] = useState<IEntrega | null>()
    const [produto, setProduto] = useState< IProducts | null>();
    const [input, setInput] = useState({
        cep: ''
    })
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
            setData(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    async function AddItemNoCarrinho(){
        try {
            const resVerify = await auth.VerifyLoggin();
            if(resVerify === false) {
                alert('Precisa estar logado para comprar!');
                return navigate('/login');
            }
            const res = await produtosContext.Add_Item(id);
            if(res !== 200) return alert('Não foi possível colocar o item no carrinho');
            alert("Produto Adicionado com sucesso!");
        } catch (error) {
            alert('Não foi possível colocar o item no carrinho');
        }
    }
    async function AddItemNoCarrinhoCompra(){
        try {
            const resVerify = await auth.VerifyLoggin();
            if(resVerify === false) {
                alert('Precisa estar logado para comprar!');
                return navigate('/login');
            }
            const res = await produtosContext.Add_Item(id);
            if(res !== 200) return alert('Não foi possível colocar o item no carrinho');
            navigate('/carrinho')
        } catch (error) {
            alert('Não foi possível colocar o item no carrinho');
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
                        <Button fullWidth variant="contained" className="inputs" type="submit" color="error" onClick={AddItemNoCarrinhoCompra}>Comprar</Button>
                        <span className='mt-3'></span>
                        <Button fullWidth variant="outlined" className="inputs mb-10" type="submit" color="error" onClick={AddItemNoCarrinho}>Adicionar ao Carrinho</Button>
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
                <DivDescription>
                    <h1 className="text-xl text-gray-700 mt-5 break-words">Descrição: {produto?.description}</h1>
                </DivDescription>
            </ProdutoComponent>
        </ContainerProduto>
    )
}