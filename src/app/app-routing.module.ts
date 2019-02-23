import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {PortfolioComponent} from './portfolio/portfolio.component';


const routes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: 'about', component: AboutComponent, data: { animation: 'isRight' }},
  {path: 'portfolio', component: PortfolioComponent, data: { animation: 'isLeft' }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
