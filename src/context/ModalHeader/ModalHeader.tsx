import { createContext, useState, useContext } from "react";
import { IAuthProvider, IContextModal, IModalState } from '../../interfaces/interfaces'


export const ModalHeaderContext = createContext<IContextModal>( {} as IContextModal);

export const ModalHeaderProvider = ({children} : IAuthProvider) => {
    const [modalState, setModalState] = useState<IModalState>({open: false});

    const openModal = () => {
        setModalState(prev => ({open: !prev.open}));
    }
    const attRes = window.innerWidth;
    
    return <ModalHeaderContext.Provider value={{modalState, openModal, attRes}}> { [ children ] } </ModalHeaderContext.Provider>   
}

export const useModalHeaderContext = () => {
    const context = useContext(ModalHeaderContext);
    return context;
}

