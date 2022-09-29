import { TextField, IconButton } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from "react";
import './input.scss'
export default function InputHeader(){
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
        <form onSubmit={SubmitForm} className=''>
            <TextField
                className="inputs"
                fullWidth
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
    )
}