import { ContainerListSection, ContainerPopUp, SectionMenu, SectionUl, SpanSection } from '../../styles/components';
import { useModalHeaderContext } from '../../context/ModalHeader/ModalHeader';
import { IToken } from '../../interfaces/interfaces';
import GitHubIcon from '@mui/icons-material/GitHub';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { useAuthContext } from '../../auth/auth';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';
import './styles.scss';

export interface SectionProps {
    user: IToken | null;
    userAuthenticate: boolean;
}

export default function Section({user, userAuthenticate}: SectionProps) {
    const ModalContext = useModalHeaderContext();
    const route = `conta/${user?._id}`;
    const auth = useAuthContext();

    return (
        <SectionMenu className="flex justify-between bg-black text-white p-3">
            {ModalContext.modalState.open !== true ? (
                <MenuIcon className="menu-image" onClick={ModalContext.openModal} />
            ) : (
                <CloseIcon className="menu-image" onClick={ModalContext.openModal} />
            )}
            {ModalContext.modalState.open === true ? (
                <ContainerPopUp className="flex-column justify-center items-center">
                    <ul className="flex-column items-center self-center">
                        <li className="flex m-3 items-center">
                            <PhoneIcon style={{ color: "red" }} />
                            <SpanSection className="ml-2 self-center text-sm">
                                (22)99942-2502
                            </SpanSection>
                        </li>
                        <li className="m-3 flex items-center">
                            <EmailIcon style={{ color: "red" }} />
                            <SpanSection className="ml-2 self-center text-sm">
                                ericklucas@id.uff.br
                            </SpanSection>
                        </li>
                        <li className="m-3 flex items-center">
                            <GitHubIcon style={{ color: "red", height: "20px" }} />
                            <SpanSection className="ml-2 flex self-center text-sm">
                                <a href="https://github.com/erickelc">Github</a>
                            </SpanSection>
                        </li>
                        {!userAuthenticate ? (
                        <div className="flex-column">
                            <SpanSection className="m-3 flex self-center text-sm">
                                <Link to="/login">Login</Link>
                            </SpanSection>
                            <SpanSection className="m-3 flex self-center text-sm">
                                <Link to="/cadastrar">Cadastro</Link>
                            </SpanSection>
                        </div>
                        ) : (
                        <div className="flex-column">
                            <SpanSection className="m-3 flex self-center text-sm">
                                <Link to={route}>
                                    {" "}
                                    <PersonIcon
                                    style={{ color: "red", height: "20px" }}
                                    className="self-center"
                                    />
                                    Minha Conta
                                </Link>
                            </SpanSection>
                            <SpanSection
                            className="m-3 flex self-center text-sm"
                            onClick={auth.logout}
                            >
                                <LogoutIcon
                                    style={{ color: "red", height: "20px" }}
                                    className="self-center"
                                />
                                logout
                            </SpanSection>
                        </div>
                        )}
                    </ul>
                </ContainerPopUp>
            ) : (
                ""
            )}
            <SectionInfos />
            <ContainerListSection className="flex justify-between">
                {!userAuthenticate ? (
                    <ul className="flex justify-between">
                        <li className="mx-2">
                            <SpanSection>
                                <Link to="/login">Login</Link>
                            </SpanSection>
                        </li>
                        <li className="mx-2">
                            <SpanSection>
                                <Link to="/cadastrar">Cadastro</Link>
                            </SpanSection>
                        </li>
                    </ul>
                ) : (
                    <div className="flex">
                        <PersonIcon
                        style={{ color: "red", height: "20px" }}
                        className="self-center"
                        />
                        <SpanSection className="ml-2 flex self-center text-sm">
                            <Link to={route}>Minha Conta</Link>
                        </SpanSection>
                        <LogoutIcon
                            style={{ color: "red", height: "20px" }}
                            className="ml-4 self-center"
                        />
                        <SpanSection
                        className="ml-2 flex self-center text-sm"
                        onClick={auth.logout}
                        >
                            logout
                        </SpanSection>
                    </div>
                )}
            </ContainerListSection>
        </SectionMenu>
    );
}