import { useModalHeaderContext } from '../../context/ModalHeader/ModalHeader';
import { ContainerPopUp, SectionMenu, SectionUl, SpanSection } from '../../styles/components';
import { getUserLocalStorage } from '../../auth/util';
import GitHubIcon from '@mui/icons-material/GitHub';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { useAuthContext } from '../../auth/auth';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';
import './styles.scss';
export default function Section(){
    const ModalContext = useModalHeaderContext();
    const auth  = useAuthContext();
    const User = getUserLocalStorage();
    const route = `conta/${User?.id}`
    console.log(ModalContext.modalState.open)
    return(
        <SectionMenu className='flex justify-between bg-black text-white p-3'>
            {(ModalContext.modalState.open !== true) ?
                <MenuIcon className='menu-image' onClick={ModalContext.openModal}/>
                : <CloseIcon className='menu-image' onClick={ModalContext.openModal}/>}
            {(ModalContext.modalState.open === true) ?
                <ContainerPopUp className='flex'>
                    <ul className='flex-column items-center'>
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
                    <div className='flex-column justify-center items-center'>
                        {(!User?.token) ? 
                            <ul className='flex justify-between'>
                                <li className='mx-2'><SpanSection><Link to='/login'>Login</Link></SpanSection></li>
                                <li className='mx-2'><SpanSection><Link to='/cadastrar'>Cadastro</Link></SpanSection></li>
                            </ul>
                            :
                            <div className='flex'>
                                <PersonIcon style={{color: 'red', height: '20px'}} className="self-center"/>
                                <SpanSection className='ml-2 flex self-center text-sm'><Link to={route} >Minha Conta</Link></SpanSection>
                                <SpanSection  className="ml-2 flex self-center text-sm"onClick={auth.logout}>logout</SpanSection>
                            </div>
                        }
                    </div>
                </ContainerPopUp>
                : ''}
            <SectionUl className='flex justify-between'>
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
            </SectionUl>
            <div className='flex justify-between'>
                {(!User?.token) ? 
                    <ul className='flex justify-between'>
                        <li className='mx-2'><SpanSection><Link to='/login'>Login</Link></SpanSection></li>
                        <li className='mx-2'><SpanSection><Link to='/cadastrar'>Cadastro</Link></SpanSection></li>
                    </ul>
                    :
                    <div className='flex'>
                        <PersonIcon style={{color: 'red', height: '20px'}} className="self-center"/>
                        <SpanSection className='ml-2 flex self-center text-sm'><Link to={route} >Minha Conta</Link></SpanSection>
                        <SpanSection  className="ml-2 flex self-center text-sm"onClick={auth.logout}>logout</SpanSection>
                    </div>
                }
            </div>
        </SectionMenu>
    )
}