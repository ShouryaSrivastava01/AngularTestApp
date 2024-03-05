import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { removeError } from "../store/alert.action";
import { Observable } from "rxjs";

@Component({
    selector:'app-alert2',
    templateUrl:'alert2.component.html'
})
export class Alert2Component {
    message$: Observable<string>

    constructor(private store : Store<{alert:string}>){
        this.message$ = this.store.select('alert')
    }

    closeAlert(){
        this.store.dispatch(removeError())
    }
    
}