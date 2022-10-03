import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button} from "@mui/material";
import { ProtectedLayoutNoLogged } from "../../components/protectedLayout/ProtectedLayout";
import { useCarrinhoContext } from "../../context/Carrinho/Carrinho";
import { getProdutosLocalStorage } from "../../context/Carrinho/util";
import { getUserLocalStorage } from "../../auth/util";
import { ImageCarrinho } from "../../styles/components";
import { IProducts } from "../../interfaces/interfaces";
import { useNavigate } from "react-router-dom";

export default function Carrinho(){
    let valor = 0;
    const navigate = useNavigate();
    const User = getUserLocalStorage();
    const Produtos = getProdutosLocalStorage();
    const produtosContext = useCarrinhoContext();
    function Redirect(){
        navigate('/compras/' + User.id)
    }
    for(let i in Produtos){
        valor += (parseFloat(Produtos[i].value) * Produtos[i].quantidade);
    }
    return(
        <ProtectedLayoutNoLogged>
            {(produtosContext.listItems.length === 0) ? <h1 className="font-bold text-2xl mt-10 text-center">Não tem nenhum produto adicionado</h1> : 
                <TableContainer>
                    <Table className="mb-10">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                
                                </TableCell>
                                <TableCell>
                                    Nome
                                </TableCell>
                                <TableCell>
                                    valor
                                </TableCell>
                                <TableCell>
                                    Quantidade
                                </TableCell>
                                <TableCell>
                                    Excluir
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Produtos?.map((items: IProducts) =>
                                <TableRow key={items._id}>
                                    <TableCell>
                                        <ImageCarrinho src={items.url_image} alt={items.name}/>
                                    </TableCell>
                                    <TableCell>
                                        <span className="font-bold text-xl">
                                            {items.name}
                                        </span>
                                    </TableCell>
                                    <TableCell>
                                        <span className="text-orange-700 font-bold text-xl">
                                            R$ {items.value}
                                        </span>
                                    </TableCell>
                                    <TableCell>
                                        <button  className="bg-none text-2xl font-bold mr-3"onClick={() => produtosContext.aumentar_quantidade(items?.idCarrinho)}>+</button>
                                        <span className="text-2xl font-bold">{items?.quantidade}</span>
                                        <button className="bg-none text-2xl font-bold ml-3 text-red-700" onClick={() => produtosContext.diminuir_quantidade(items?.idCarrinho)}>-</button>
                                    </TableCell>
                                    <TableCell>
                                        <Button variant="outlined" color="error" onClick={() => produtosContext.Remove_Items(items?.idCarrinho)}>
                                            Excluir
                                        </Button>
                                    </TableCell>
                                </TableRow> 
                            )}
                        </TableBody>
                    </Table>
                    <h2 className="text-2xl self-center text-center mb-5 font-bold">
                        Valor: <span className="font-bold text-red-500">R${valor.toFixed(2)}</span>
                    </h2>
                    <Button className="ml-4" fullWidth variant="contained" color="primary" onClick={Redirect}>
                            Comprar
                    </Button>
                </TableContainer>
            }
        </ProtectedLayoutNoLogged>
    )


}