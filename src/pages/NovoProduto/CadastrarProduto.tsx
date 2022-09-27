import { ProtectedLayoutAdmin} from "../../components/protectedLayout/ProtectedLayout"; 
import {  ConteinerCadastroProduto, FormComponent } from "../../styles/components";
import { Button, TextField } from "@mui/material";
import { apiBack_End } from "../../api/api";
import { useState } from "react";
import './style.scss';
export default function CadastroProduto(){
    const [inputs, setInputs] = useState({
        name: '',
        description: '',
        value: '',
        url_image: ''
    });
    async function SubmitForm(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        try {
            const response = await apiBack_End.post('api/products/new', inputs);
            if(response.status === 201) return alert('Produto cadastrado com sucesso!');
        } catch (error) {
            alert('Não foi possível cadastrar produto');
        }
    }   
    return(
        <ProtectedLayoutAdmin>
            <ConteinerCadastroProduto>
                <FormComponent onSubmit={SubmitForm}>
                    <h2 className="mb-4 font-bold text-2xl">Criar Novo Produto</h2>
                    <TextField
                        required
                        className="inputs"
                        id="outlined-basic"
                        label="Escreva o nome do produto"
                        type='text'
                        rows={4}
                        variant="outlined"
                        value={inputs.name} 
                        onChange={ (e) => setInputs(prev => ({...prev, name: e.target.value}))}
                    />
                    <TextField
                        required
                        className="inputs"
                        id="outlined-basic"
                        label="Valor do Produto"
                        type='number'
                        rows={4}
                        variant="outlined"
                        value={inputs.value} 
                        onChange={ (e) => setInputs(prev => ({...prev, value: e.target.value}))}
                    />
                    <TextField
                        required
                        className="inputs"
                        id="outlined-multiline-static"
                        label="Descrição do produto"
                        multiline
                        type='text'
                        rows={4}
                        variant="outlined"
                        value={inputs.description} 
                        onChange={ (e) => setInputs(prev => ({...prev, description: e.target.value}))}
                    />
                    <TextField
                        required
                        className="inputs"
                        id="outlined-basic"
                        label="Escreva o link para imagem"
                        type='text'
                        variant="outlined"
                        value={inputs.url_image} 
                        onChange={ (e) => setInputs(prev => ({...prev, url_image: e.target.value}))}
                    />
                    <Button variant="contained" className="inputs" type="submit">Cadastrar</Button>
                </FormComponent>
            </ConteinerCadastroProduto>
        </ProtectedLayoutAdmin>
    )
}