import { CdkDropList } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import ItemDeCompra from 'src/app/models/itemDeCompra';

@Component({
  selector: 'app-pesquisa-item-compra',
  templateUrl: './pesquisa-item-compra.component.html',
  styleUrls: ['./pesquisa-item-compra.component.css']
})
export class PesquisaItemCompraComponent implements OnInit {

  itensDeCompra: ItemDeCompra[];
  itensPesquisados: ItemDeCompra[];

  @Input()
  drop: any;
  @Input()
  compraList: CdkDropList;

  @Output()
  itemList:CdkDropList;

  constructor() { }

  ngOnInit(): void {
    this.itensDeCompra = [];
    this.itensDeCompra.push(new ItemDeCompra("Banana", 3, 1, 2, "un"));
    this.itensDeCompra.push(new ItemDeCompra("Maça", 2, 1, 5, "un"));
    this.itensDeCompra.push(new ItemDeCompra("Arroz", 3, 1, 2, "pct"));
    this.itensDeCompra.push(new ItemDeCompra("Feijão", 3, 1, 2, "pct"));
    this.itensDeCompra.push(new ItemDeCompra("Iogurte", 3, 1, 2, "un"));
    this.itensDeCompra.push(new ItemDeCompra("Água", 3, 1, 2, "un"));
    this.itensPesquisados = [];
    this.itensPesquisados.push(...this.itensDeCompra);
  }


  pesquisaPorItem(value: string) {
    this.itensPesquisados = this.itensDeCompra.filter((x: ItemDeCompra) => {
      return x.nome.toLowerCase().match(value.toLowerCase());
      //return x.nome.split(value).length > 1;
      /**
       * let valueRegex = new RegExp(value.toLowerCase());
       * return x.nome.toLowerCase().search(valueRegex) !== -1;
       */
      // return x.nome.includes(value);
      // return x.nome.toLowerCase().match(value.toLowerCase());
      // return x.nome.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    })

  }

}
