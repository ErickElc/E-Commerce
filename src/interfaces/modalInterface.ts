export interface IModalState {
    open?: boolean
}
export interface IContextModal extends IModalState{

    openModal: () => void;

    modalState: IModalState;

    attRes: number;

}
export interface IAutor{
    autor: {
        _id: string,
        name: string,
        age: number
        email: string,
        createdDate: string
    }
}
export interface IPerfil{
    _id: string,
    name: string,
    age: number
    email: string,
    createdDate: string ,
    status: Number
}

export interface IAuthProvider{
    children: JSX.Element | JSX.Element[]
}