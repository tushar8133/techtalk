import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AAAAComponent } from './aaaa/aaaa.component';
import { BBBBComponent } from './bbbb/bbbb.component';
import { CCCCComponent } from './cccc/cccc.component';
import { DDDDComponent } from './dddd/dddd.component';

const routes: Routes = [
  { path: '', redirectTo: '/AAAA', pathMatch: 'full' },
  { path: 'AAAA', component: AAAAComponent },
  { path: 'AAAA/BBBB', component: BBBBComponent },
  { path: 'AAAA/BBBB/CCCC', component: CCCCComponent },
  { path: 'AAAA/BBBB/CCCC/DDDD', component: DDDDComponent },
  { path: '**', component: AAAAComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
