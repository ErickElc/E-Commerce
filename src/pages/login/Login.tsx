import { ContainerCadastro, ContainerFormularioCadastro, TextLink } from "../../styles/components";
import { ProtectedLayoutLogged } from "../../components/protectedLayout/ProtectedLayout";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { useAuthContext } from "../../auth/auth";
import React, { useState } from "react";
import './login.scss';

export default function Login(){
    const auth = useAuthContext();
    const [inputs , setInputs] = useState({
        email: '',
        password: ''
    });
    async function SubmitForm(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        try {
            const res = await auth.authenticate(inputs.email, inputs.password);
            console.log(res)
            if(res === 202){
                console.log('logado');
            }
            else{
                setInputs({email: '', password: ''});
                return alert('Não foi possível realizar login');
            }
        } catch (error) {
            console.log(error);
            setInputs({email: '', password: ''});
            return alert('Email ou senha incorretos');
        }
    }
    
    return(
        <ProtectedLayoutLogged>
            <ContainerCadastro className="Container">
                <ContainerFormularioCadastro className="Form" onSubmit={SubmitForm}>
                    <h1 className='font-bold text-2xl self-center'>Login</h1>
                    <TextField 
                        required
                        type="email"
                        label="Email"
                        variant="outlined"
                        className='Inputs'
                        id="outlined-basic"
                        value={inputs.email}
                        onChange={(e) => setInputs(prev => ({...prev, email: e.target.value}))}
                    />
                    <TextField
                        required
                        className='Inputs'
                        id="outlined-basic"
                        type="password"
                        label="Senha"
                        value={inputs.password}
                        variant="outlined"
                        onChange={(e) => setInputs(prev => ({...prev, password: e.target.value}))}
                    />
                    <Button variant="contained" className="Inputs" type="submit">Entrar</Button>
                    <TextLink className="self-center">
                        <Link to='/cadastrar'>Não tem Cadastro?</Link>
                    </TextLink>
                </ContainerFormularioCadastro>
            </ContainerCadastro>
        </ProtectedLayoutLogged>
    )
}