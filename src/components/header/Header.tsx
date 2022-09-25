import { useModalHeaderContext } from "../../context/ModalHeader/ModalHeader";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { HeaderLayout, TitleHeader } from "../../styles/components";
import InputHeader from "../InputHeader/inputHeader";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@mui/material"
export default function Header(){
    const headerContext = useModalHeaderContext();
    function ToggleMode(){
        headerContext.openModal();
    }
    return (
        <HeaderLayout>
            <TitleHeader className="text-2xl font-bold text-white">Preço garantido!</TitleHeader>
            {(headerContext.attRes >= 630) ? <InputHeader/> : ''}
            <div>
                {
                (headerContext.attRes >= 630) 
                ? <IconButton>
                    <LocalGroceryStoreIcon style={{color: "white"}}/>: {0}
                </IconButton> 
                : '' }
                <IconButton onClick={ToggleMode}>
                    {(headerContext.modalState.open !== true)
                    ? <MenuIcon color="info" style={{height: '40px', width: '40px', color: 'white'}}/>
                    : <CloseIcon color="info" style={{height: '40px', width: '40px', color: 'white'}}/>}
                </IconButton>
            </div>
        </HeaderLayout>
    )
}
