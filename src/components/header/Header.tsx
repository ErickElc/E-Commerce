import { useModalHeaderContext } from "../../context/ModalHeader/ModalHeader";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { HeaderLayout, TitleHeader } from "../../styles/components";
import InputHeader from "../InputHeader/inputHeader";
import { IconButton } from "@mui/material";
import {Link} from 'react-router-dom';
export default function Header(){
    const headerContext = useModalHeaderContext();
    return (
        <HeaderLayout>
            <TitleHeader className="text-2xl font-bold text-white"><Link to='/'>Eletronicos<span className="text-orange-500">.</span></Link></TitleHeader>
            {(headerContext.attRes >= 630) ? <InputHeader/> : ''}
            <div>
                {
                (headerContext.attRes >= 630) 
                ?   <IconButton>
                        <LocalGroceryStoreIcon style={{color: "white"}}/>
                        <span className="text-white ml-3">{0}</span>
                    </IconButton> 
                : '' }
            </div>
        </HeaderLayout>
    )
}
