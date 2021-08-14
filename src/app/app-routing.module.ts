import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {CvComponent} from './portfolio/cv.component';

const routes: Routes = [
  {path: 'cv', component: CvComponent},
  {path: '**', redirectTo: '/'},
  {path: '', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
