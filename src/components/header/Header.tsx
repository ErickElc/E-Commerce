import { TextField, IconButton } from "@mui/material"
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SearchIcon from '@mui/icons-material/Search';
import { HeaderLayout } from "../../styles/components";
import React, { useState } from "react";

export default function Header(){
    const [input, setInput] = useState({
        search: ''
    })
    function handleChange(e : React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>){
        setInput(prev => ({...prev, search: e.target.value}));
    }

    function SubmitForm(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        if(input.search === '') return null;
        console.log(input.search);
        setInput({search: ''});
    }
    return (
        <HeaderLayout>
            <h2 className="text-2xl font-bold text-white">Preço garantido!</h2>
            <form onSubmit={SubmitForm}>
                <TextField
                    value={input.search}
                    id="filled-basic"
                    variant="filled"
                    color="warning"
                    label="Procurar um produto"
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                            <IconButton type="submit">
                                <SearchIcon/>
                            </IconButton>
                        )
                    }}
                />
            </form>
            <IconButton>
                <LocalGroceryStoreIcon style={{color: "white"}}/>
            </IconButton>
        </HeaderLayout>
    )
}
