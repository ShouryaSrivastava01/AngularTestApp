import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentAComponent } from './group/component-a/component-a.component';
import { ComponentBComponent } from './group/component-b/component-b.component';
import { GroupModule } from './group/group.module';
import { GroupRoutingModule } from './group/group.routing.module';
import { RouterModule } from '@angular/router';
import { AlertComponent } from './alert/alert.component';
import { StoreModule } from '@ngrx/store';
import { alertMessage } from './store/alert.reducer';
import { Alert2Component } from './alert2/alert2.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    Alert2Component
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    GroupRoutingModule,
    GroupModule,
    StoreModule.forRoot({
      alert : alertMessage
    }, {})
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
