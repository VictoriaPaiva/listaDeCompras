import { CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Compra from 'src/app/models/compra';
import ItemDeCompra from 'src/app/models/itemDeCompra';

@Component({
  selector: 'app-fazer-compras',
  templateUrl: './fazer-compras.component.html',
  styleUrls: ['./fazer-compras.component.css']
})
export class FazerComprasComponent implements OnInit {
  compra: Compra;
  compraList: CdkDropList;

  @ViewChild("itemList") itemList: ElementRef;


  constructor(private ref: ChangeDetectorRef) { }

  drop(event: CdkDragDrop<ItemDeCompra[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      /**
       *  Se houver o atributo compra, atualizo o valor total
       */
      if (this.compra) this.updateValorTotal();

    }
  }

  ngOnInit(): void {
    this.compra = new Compra(new Date, [], 0, "VR", 260, false, "Mistura");
  }

  increaseQuantity(item: ItemDeCompra) {
    item.quantidade++;
    item.preco = item.precoUnitario * item.quantidade;
    /**
     * Atualizo o valor total após alteração
     */
    this.updateValorTotal();
  }

  decreaseQuantity(item: ItemDeCompra) {
    if (item.quantidade > 1) {
      item.quantidade--
      item.preco = item.precoUnitario * item.quantidade;
      /**
       * Atualizo o valor total após alteração
       */
      this.updateValorTotal();
    }
  }

  updateValorTotal() {
    this.compra.valorTotal = this.compra.itensCompra.reduce((total: number, curr: ItemDeCompra) => {
      return total + curr.preco;
    }, 0);
  }

}
