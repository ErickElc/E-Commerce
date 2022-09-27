export interface IAuthProvider{
    children: JSX.Element;
}
export interface IContext {
    authenticate: (email: string, password: string) => Promise<number | undefined>;
    logout: () => void;
    VerifyLoggin: () => void
}