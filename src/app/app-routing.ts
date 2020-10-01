import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { from } from 'rxjs';
import { CompraPesquisaComponent } from './components/compra-pesquisa/compra-pesquisa.component';
import { PesquisaItemCompraComponent } from './components/pesquisa-item-compra/pesquisa-item-compra.component';
import { FazerComprasComponent } from './components/fazer-compras/fazer-compras.component';

const routes: Routes = [
{path:'compra-pesquisa', component: CompraPesquisaComponent},
{path:'pesquisa-item-compra', component: PesquisaItemCompraComponent},
{path:'fazer-compras', component: FazerComprasComponent}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
