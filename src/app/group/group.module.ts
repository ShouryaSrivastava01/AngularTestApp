import { NgModule } from "@angular/core";
import { ComponentAComponent } from "./component-a/component-a.component";
import { ComponentBComponent } from "./component-b/component-b.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { GroupRoutingModule } from "./group.routing.module";
import { GroupComponent } from "./group.component";

@NgModule({
    declarations:[
        ComponentAComponent,
        ComponentBComponent,
        GroupComponent
    ],
    imports:[
        CommonModule,
        GroupRoutingModule,
        RouterModule

    ]
})
export class GroupModule{}