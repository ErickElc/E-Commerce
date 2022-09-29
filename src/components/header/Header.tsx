import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { getProdutosLocalStorage } from '../../context/Carrinho/util';
import { useCarrinhoContext } from '../../context/Carrinho/Carrinho';
import { HeaderLayout, TitleHeader } from "../../styles/components";
import InputHeader from "../InputHeader/inputHeader";
import { IconButton } from "@mui/material";
import {Link} from 'react-router-dom';
export default function Header(){
    const CarrinhoContext = useCarrinhoContext();
    return (
        <HeaderLayout>
            <TitleHeader className="text-2xl font-bold text-white"><Link to='/'>Casa do hardware<span className="text-orange-500">.</span></Link></TitleHeader>
            <InputHeader/>
            <div>
                <IconButton>
                    <LocalGroceryStoreIcon style={{color: "white"}}/>
                    <span className="text-white ml-3">{CarrinhoContext.listItems.length}</span>
                </IconButton> 
            </div>
        </HeaderLayout>
    )
}
