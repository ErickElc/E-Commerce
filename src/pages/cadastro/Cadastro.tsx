import { ProtectedLayoutLogged } from "../../components/protectedLayout/ProtectedLayout";
import { ContainerCadastro, ContainerFormularioCadastro, TextLink } from "../../styles/components";
import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { apiBack_End } from "../../api/api";
import { useState } from "react";
import './cadastro.scss';

export default function Cadastrar(){
    const navigate = useNavigate();
    const [inputs , setInputs] = useState({
        name: '',
        email: '',
        password: ''
    });
    async function SubmitForm(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        try {
            const response = await apiBack_End.post('api/users/new',{
                name: inputs.name,
                email: inputs.email,
                password: inputs.password
            });
            
            if(response.status === 201){
                alert('Cadastro realizado com sucesso');
                navigate('/login');
            }
            console.log(response)
        } catch (error) {
            alert('Não foi possível cadastrar usuário');
        }
    } 
    return(
        <ProtectedLayoutLogged>
            <ContainerCadastro className="Container">
                <ContainerFormularioCadastro className="Form" onSubmit={SubmitForm}> 
                    <h1 className='font-bold text-2xl self-center'>Criar Conta</h1>
                    <TextField 
                        required
                        type="text"
                        className='Inputs'
                        variant="outlined"
                        id="outlined-basic"
                        value={inputs.name}
                        label="Digite seu nome"
                        onChange={(e) => setInputs(prev => ({...prev, name: e.target.value}))}
                    />
                    <TextField 
                        required
                        className='Inputs'
                        id="outlined-basic"
                        type="email"
                        label="Digite seu email"
                        variant="outlined"
                        value={inputs.email}
                        onChange={(e) => setInputs(prev => ({...prev, email: e.target.value}))}
                    />
                    <TextField
                        required
                        className='Inputs'
                        id="outlined-basic"
                        type="password"
                        label="Senha"
                        variant="outlined"
                        value={inputs.password}
                        onChange={(e) => setInputs(prev => ({...prev, password: e.target.value}))}
                    />
                    <Button variant="contained" className="Inputs" type="submit">Entrar</Button>
                    <TextLink className="self-center">
                        <Link to='/login'> Já tem cadastro</Link>
                    </TextLink>
                </ContainerFormularioCadastro>
            </ContainerCadastro>
        </ProtectedLayoutLogged>
    )
}