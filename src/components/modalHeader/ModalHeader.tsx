import { useModalHeaderContext } from "../../context/ModalHeader/ModalHeader";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { ModalHeaderLayout } from "../../styles/components";
import { IconButton } from "@mui/material";
export default function ModalHeader(){
    const {attRes} = useModalHeaderContext();
    console.log(attRes);
    return(
        <>
            <ModalHeaderLayout className='mb-3'>
                <a href="/login">Login</a>
                <a href="/cadastro">Cadastro</a>
                {
                (attRes < 630) 
                ? <IconButton>
                    <LocalGroceryStoreIcon style={{color: "white"}}/>: {0}
                </IconButton> 
                : '' }
            </ModalHeaderLayout>
        </>
    )
}