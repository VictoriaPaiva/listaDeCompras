import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing';
import { PesquisaItemCompraComponent } from './components/pesquisa-item-compra/pesquisa-item-compra.component';
import { CompraPesquisaComponent } from './components/compra-pesquisa/compra-pesquisa.component';
import { FazerComprasComponent } from './components/fazer-compras/fazer-compras.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CompraPesquisaComponent,
    PesquisaItemCompraComponent,
    FazerComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
