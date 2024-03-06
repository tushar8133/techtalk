import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AAAAComponent } from './aaaa/aaaa.component';
import { BBBBComponent } from './bbbb/bbbb.component';
import { CCCCComponent } from './cccc/cccc.component';
import { DDDDComponent } from './dddd/dddd.component';
import { Test1Component } from './test1/test1.component';

const routes: Routes = [
  { path: '', redirectTo: '/AAAA', pathMatch: 'full' },
  { path: 'AAAA', component: AAAAComponent },
  { path: 'BBBB', component: BBBBComponent },
  { path: 'CCCC', component: CCCCComponent },
  { path: 'DDDD', component: DDDDComponent },
  { path: 'test1', component: Test1Component },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
