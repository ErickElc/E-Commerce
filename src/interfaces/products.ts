
export interface IProducts{
    name: string,
    description: string,
    url_image: string,
    value: string,
    _v: number,
    _id: string
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