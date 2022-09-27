import { getUserLocalStorage } from '../../auth/util';
import GitHubIcon from '@mui/icons-material/GitHub';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import {Link} from 'react-router-dom'
import { SpanSection } from '../../styles/components';
export default function Section(){
    const User = getUserLocalStorage();


    return(
        <section className='flex justify-between bg-black text-white p-3'>
            <ul className='flex justify-between'>
                <li className='mx-4 flex items-center'>
                    <PhoneIcon style={{color: 'red'}} />
                    <SpanSection className='ml-2 self-center text-sm'>(22)99942-2502</SpanSection>
                </li>
                <li className='mx-4 flex items-center'>
                    <EmailIcon style={{color: 'red'}} />
                    <SpanSection className='ml-2 self-center text-sm'>ericklucas@id.uff.br</SpanSection>
                </li>
                <li className='mx-4 flex items-center'>
                    <GitHubIcon style={{color: 'red', height: '20px'}} />
                    <SpanSection className='ml-2 flex self-center text-sm'><a href='https://github.com/erickelc'>Github</a></SpanSection>
                </li>
            </ul>
            <div className='flex justify-between'>
                {(!User?.token) ? 
                    <ul className='flex justify-between'>
                        <li className='mx-2'><SpanSection>Login</SpanSection></li>
                        <li className='mx-2'><SpanSection>Cadastro</SpanSection></li>
                    </ul>
                    :
                    <div className='flex'>
                        <PersonIcon style={{color: 'red', height: '20px'}} className="self-center"/>
                        <SpanSection className='ml-2 flex self-center text-sm'>Minha Conta</SpanSection>
                    </div>
                }
            </div>
        </section>
    )
}