
import ItemDeCompra from './itemDeCompra';

export default class Compra{
    data: Date;
    itensCompra: ItemDeCompra[];
    valorTotal: number;
    formaPagamento: string;
    valorEsperado: number;
    dentroOrcamento: boolean;
    tipoCompra: string;

    constructor(
        data:Date,
        itensCompra:ItemDeCompra[],
        valorTotal:number,
        formaPag:string,
        valorEsp:number,
        dentroOrc:boolean,
        tipoCompra:string){
            
        this.data = data;
        this.itensCompra = itensCompra;
        this.valorTotal = valorTotal;
        this.formaPagamento = formaPag;
        this.valorEsperado = valorEsp;
        this.dentroOrcamento = dentroOrc;
        this.tipoCompra = tipoCompra;
    }
}