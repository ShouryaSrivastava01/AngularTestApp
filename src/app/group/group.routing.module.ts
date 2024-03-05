import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupComponent } from './group.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';


const routes: Routes = [
  {path:'',component: GroupComponent, children:[
    {path: 'A',component: ComponentAComponent},
    {path: 'B',component: ComponentBComponent},
  ]}
// {path: 'group/A',component: ComponentAComponent},
//     {path: 'group/B',component: ComponentBComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
