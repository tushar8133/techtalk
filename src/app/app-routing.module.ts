import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AAAAComponent } from './aaaa/aaaa.component';
import { BBBBComponent } from './bbbb/bbbb.component';
import { CCCCComponent } from './cccc/cccc.component';
import { DDDDComponent } from './dddd/dddd.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';

const routes: Routes = [
  { path: '', redirectTo: '/test2', pathMatch: 'full' },
  { path: 'AAAA', component: AAAAComponent },
  { path: 'BBBB', component: BBBBComponent },
  { path: 'CCCC', component: CCCCComponent },
  { path: 'DDDD', component: DDDDComponent },
  { path: 'test1', component: Test1Component },
  { path: 'test2', component: Test2Component },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
