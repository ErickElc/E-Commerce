import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button} from "@mui/material";
import { ProtectedLayoutNoLogged, ProtectedLayoutPrivatePageUser } from "../../components/protectedLayout/ProtectedLayout";
import { useCarrinhoContext } from "../../context/Carrinho/Carrinho";
import { getProdutosLocalStorage } from "../../context/Carrinho/util";
import { IProducts } from "../../interfaces/interfaces";
import { ImageCarrinho } from "../../styles/components";

export default function Carrinho(){
    const Produtos = getProdutosLocalStorage();
    const produtosContext = useCarrinhoContext();
    return(
        <ProtectedLayoutNoLogged>
            <TableContainer>
                <Table>
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
                                    {items.name}
                                </TableCell>
                                <TableCell>
                                    R$ {items.value}
                                </TableCell>
                                <TableCell>
                                    <Button variant="outlined" color="error">
                                        Excluir
                                    </Button>
                                </TableCell>
                            </TableRow> 
                        )}
                    </TableBody>
                </Table>
                <Button className="m-4" fullWidth variant="contained" color="primary">Comprar</Button>
            </TableContainer>
        </ProtectedLayoutNoLogged>
    )


}