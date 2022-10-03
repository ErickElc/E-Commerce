export interface IEntrega{
    Valor: string, 
    PrazoEntrega?: string
}
export interface IAuthProvider{
    children: JSX.Element;
}
export interface IContext {
    authenticate: (email: string, password: string) => Promise<number| undefined>;
    logout: () => void;
    VerifyLoggin: () => void | Promise<Boolean>
}
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

export interface IProducts{
    name: string,
    description: string,
    url_image: string,
    value: string,
    _v: number,
    _id: string,
    quantidade: number
    idCarrinho?: string

}
export interface ICarrinho{
    Array: [
        {
            name: string,
            description: string,
            url_image: string,
            value: string,
            _v: number,
            _id: string
        }
    ]
}
export interface ICorreios{
    Codigo: string;
    Valor: string;
    PrazoEntrega: string;
    ValorSemAdicionais: string;
    ValorMaoPropria: string;
    ValorAvisoRecebimento: string;
    ValorDeclarado: string;
    EntregaDomiciliar: string;
    EntregaSabado: string;
    obsFim: string;
    Erro: string;
    MsgErro: string;
}

export interface IUser{
    _id: string;
    name: string,
    email: string,
    password: string
    createdDate: string
}
export interface IToken{
    token?: string,
    email?: string,
    _id?: string;
    name?: string,
}