import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeError, showError } from './store/alert.action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fourth-app';
  error:string = null


  constructor(private store : Store<{alert:string}>){

  }

  onErr(){
    // this.error = "this is an error"
    this.store.dispatch(showError({message:'this is an error'}))
    setTimeout(() => {
      this.store.dispatch(removeError())
    }, 1000);
  }

  closeErr(){
    this.error = null
    setTimeout(() => {
      console.log('error');
      this.error = null;
  }, 1000);
  }
}
