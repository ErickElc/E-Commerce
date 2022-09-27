
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