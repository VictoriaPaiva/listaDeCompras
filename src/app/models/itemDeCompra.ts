export default class ItemDeCompra{
    nome: string;
    preco: number; 
    precoUnitario: number;
    quantidade: number;
    tipoQntd: string;
    constructor(_nome:string, _preco:number, _precoUnitario:number, _quantidade:number, _tipoQntd:string){
        this.nome = _nome;
        this.preco = _preco;
        this.quantidade = _quantidade;
        this.tipoQntd = _tipoQntd;
        this.precoUnitario = _precoUnitario;
    }
    
}