import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GroupComponent } from './group/group.component';

const routes: Routes = [
  {path:'',component:AppComponent},
  // lazy loading
  {path:'group', loadChildren:  ()=> import('./group/group.module').then(m=>m.GroupModule)},
  // {path:'group', component: GroupComponent}
  {path:'standalone', loadComponent: ()=>import('./standalone/standalone.component').then(m=>m.StandaloneComponent)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
