import { ProtectedLayoutPrivatePageUser } from "../../components/protectedLayout/ProtectedLayout";
import { ContainerProduto, ProdutoComponent } from "../../styles/components";
import { useCarrinhoContext } from "../../context/Carrinho/Carrinho";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {useState} from 'react';
export default function Comprar(){
    const navigate = useNavigate();
    const Produto = useCarrinhoContext();
    const [valores, setValores] = useState(0);
    const [request, setRequest] = useState(false);


    function FinalizarCompra(){
        setTimeout(()=>{
            alert('Sua Compra foi concluida com sucesso!');
            Produto.Limpar_Carrinho();
            navigate('/'); 
        }, 3000);
    }



    async function VerificarValor(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            let valoresFinal = 0;
            let valor = '0'

            for(let i in Produto.listItems){
                valoresFinal += (parseFloat(Produto.listItems[i].value) * (Produto.listItems[i].quantidade));
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
    return (
      <ProtectedLayoutPrivatePageUser>
        <ContainerProduto className="bg-black">
          <ProdutoComponent className="bg-white">
            {request ? (
              <div>
                <h1 className="m-3 text-center font-bold text-2xl text-red-700">
                  Valor Final:
                </h1>
                <h2 className="m-3 text-center font-bold text-xl">
                  Lista de Compras
                </h2>
                {Produto.listItems.map((item) => (
                  <ul key={item._id} className="flex justify-between">
                    <li className="font-bold text-lg">{item.name}</li>
                    <li className="font-bold text-lg">
                      <span className="ml-3 text-end">
                        R$: {parseFloat(item.value)}
                      </span>
                      <span className="ml-3">x {item?.quantidade}</span>
                    </li>
                  </ul>
                ))}
                <h1 className="m-3 text-center font-bold text-xl">
                  R$: {valores.toFixed(2).replace(".", ",")}
                </h1>
                <Button
                  fullWidth
                  variant="contained"
                  type="submit"
                  onClick={FinalizarCompra}
                >
                  Finalizar Compra
                </Button>
              </div>
            ) : (
              <form onSubmit={VerificarValor}>
                <h1 className="mb-5 text-center font-bold text-3xl">
                  Calcule o frete antes de finalizar
                </h1>

                <Button variant="contained" type="submit">
                  Verificar
                </Button>
              </form>
            )}
          </ProdutoComponent>
        </ContainerProduto>
      </ProtectedLayoutPrivatePageUser>
    );
}