import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button} from "@mui/material";
import { ProtectedLayoutPrivatePageUser } from "../../components/protectedLayout/ProtectedLayout";
import { useCarrinhoContext } from "../../context/Carrinho/Carrinho";
import { getProdutosLocalStorage } from "../../context/Carrinho/util";
import { IProducts } from "../../interfaces/interfaces";

export default function Carrinho(){
    const Produtos = getProdutosLocalStorage();
    const produtosContext = useCarrinhoContext();
    return(
        <ProtectedLayoutPrivatePageUser>
            <TableContainer>
                {/* <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                _id
                            </TableCell>
                            <TableCell>
                                Nome
                            </TableCell>
                            <TableCell>
                                email
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
                                    "{items._id}"
                                </TableCell>
                                <TableCell>
                                    {items.name}
                                </TableCell>
                                <TableCell>
                                    {items.email}
                                </TableCell>
                                <TableCell>
                                    <Button variant="outlined" color="error" onClick={ () => {ExcluirElementos(items._id) }}>
                                        Excluir
                                    </Button>
                                </TableCell>
                            </TableRow> 
                        )}
                    </TableBody>
                </Table> */}
            </TableContainer>
        </ProtectedLayoutPrivatePageUser>
    )


}