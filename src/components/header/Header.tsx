import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { HeaderLayout, TitleHeader } from "../../styles/components";
import InputHeader from "../InputHeader/inputHeader";
import { IconButton } from "@mui/material";
import {Link} from 'react-router-dom';
export default function Header(){
    return (
        <HeaderLayout>
            <TitleHeader className="text-2xl font-bold text-white"><Link to='/'>Eletronicos<span className="text-orange-500">.</span></Link></TitleHeader>
            <InputHeader/>
            <div>
                <IconButton>
                    <LocalGroceryStoreIcon style={{color: "white"}}/>
                    <span className="text-white ml-3">{0}</span>
                </IconButton> 
            </div>
        </HeaderLayout>
    )
}
