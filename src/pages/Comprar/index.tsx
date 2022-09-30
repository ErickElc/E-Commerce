import { ProtectedLayoutPrivatePageUser } from "../../components/protectedLayout/ProtectedLayout";
import { ContainerProduto, ProdutoComponent } from "../../styles/components";
import { useCarrinhoContext } from "../../context/Carrinho/Carrinho";
import { Button, TextField } from "@mui/material";
import { apiBack_End } from "../../api/api";
import {useState} from 'react'
import { useNavigate } from "react-router-dom";
export default function Comprar(){
    const navigate = useNavigate();
    const Produto = useCarrinhoContext();
    const [inputs, setInputs] = useState({cep: ''});
    const [valores, setValores] = useState(0);
    const [request, setRequest] = useState(false);


    function FinalizarCompra(){

        setTimeout(()=>{
            alert('Sua Compra foi concluida com sucesso!');
            navigate('/'); 
        }, 3000);
    }



    async function VerificarValor(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            let valoresFinal = 0;
            const res = await apiBack_End.get(`api/entregas/valor/${inputs.cep}`)
            const valor = (res.data?.Valor === undefined) ? '' : res.data.Valor.replace(',', '.');
            for(let i in Produto.listItems){
                valoresFinal += parseFloat(Produto.listItems[i].value);
            }
            if(valor !== '') {
                const valorFrete = parseFloat(valor);
                setValores(valoresFinal + valorFrete);
                return setRequest(true);
            }
        } catch (error) {
            setRequest(false)
            console.log(error);
        }
    }
    return(
        <ProtectedLayoutPrivatePageUser>
            <ContainerProduto className="bg-black">
                <ProdutoComponent className="bg-white">
                    <form onSubmit={VerificarValor}>
                        <h1 className="mb-5 text-center font-bold text-3xl">Calcule o frete antes de finalizar</h1>
                        <TextField
                            required
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            color="primary"
                            inputProps={{ maxLength: 8 }}
                            type="text"
                            label="Digite seu Cep"
                            value={inputs.cep}
                            onChange={(e) => (setInputs(prev => ({...prev, cep: e.target.value})))}
                            InputProps={{
                                endAdornment: (
                                    <Button variant="contained" type="submit">Verificar</Button>
                                )
                            }}
                        />
                    </form>
                    {
                        (request) ? 
                        <div>
                            <h1 className="m-3 text-center font-bold text-2xl text-red-700">Valor Final:</h1>
                            <h2 className="m-3 text-center font-bold text-xl">Lista de Compras</h2>
                            {Produto.listItems.map(item =>(
                                <ul key={item._id} className="flex justify-between">
                                    <li className="font-bold text-lg">{item.name}</li>
                                    <li className="font-bold text-lg"><span className="ml-3 text-end">R$: {item.value}</span></li>
                                </ul>
                            ))}
                            <h1 className="m-3 text-center font-bold text-xl">R$: {valores.toFixed(2).replace('.', ',')}</h1>
                            <Button fullWidth variant="contained" type="submit" onClick={FinalizarCompra}>Finalizar Compra</Button>
                        </div> : ''
                    }
                </ProdutoComponent>
            </ContainerProduto>
        </ProtectedLayoutPrivatePageUser>
    )
}