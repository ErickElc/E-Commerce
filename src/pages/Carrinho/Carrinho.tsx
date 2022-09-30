import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button} from "@mui/material";
import { ProtectedLayoutNoLogged } from "../../components/protectedLayout/ProtectedLayout";
import { useCarrinhoContext } from "../../context/Carrinho/Carrinho";
import { getProdutosLocalStorage } from "../../context/Carrinho/util";
import { getUserLocalStorage } from "../../auth/util";
import { ImageCarrinho } from "../../styles/components";
import { IProducts } from "../../interfaces/interfaces";
import { useNavigate } from "react-router-dom";

export default function Carrinho(){
    const navigate = useNavigate();
    const User = getUserLocalStorage();
    const Produtos = getProdutosLocalStorage();
    const produtosContext = useCarrinhoContext();
    function Redirect(){
        navigate('/compras/' + User.id)
    }
    return(
        <ProtectedLayoutNoLogged>
            {(produtosContext.listItems.length === 0) ? <h1 className="font-bold text-2xl mt-10 text-center">Não tem nenhum produto adicionado</h1> : 
                <TableContainer>
                    <Table className="mb-20">
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
                                        <Button variant="outlined" color="error" onClick={() => produtosContext.Remove_Items(items._id)}>
                                            Excluir
                                        </Button>
                                    </TableCell>
                                </TableRow> 
                            )}
                        </TableBody>
                    </Table>
                    <Button className="ml-4" fullWidth variant="contained" color="primary" onClick={Redirect}>
                            Comprar
                    </Button>
                </TableContainer>
            }
        </ProtectedLayoutNoLogged>
    )


}