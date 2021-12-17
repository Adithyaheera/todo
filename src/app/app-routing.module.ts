import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropComponent } from './drop/drop.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  {path:'',component:TodolistComponent},
  {path:'drop',component:DropComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
