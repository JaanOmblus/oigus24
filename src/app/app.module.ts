import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';

import { AppRoutingModule } from './app-routing.module';

import { AvalehtComponent} from './avaleht/avaleht.component';
import { Alaleht1Component} from './alaleht1/alaleht1.component';
import { Alaleht2Component} from './alaleht2/alaleht2.component';
import { Alaleht3Component} from './alaleht3/alaleht3.component';
import { Alaleht4Component} from './alaleht4/alaleht4.component';

import { RobotComponent } from './robot/robot.component';
import { RbtComponent } from './robot/robot-msg/robot-msg.component';
import { HagiComponent } from './hagi/hagi.component';
import { HagikirjutamineComponent } from './hagikirjutamine/hagikirjutamine.component';
import { HagitekstComponent } from './hagitekst/hagitekst.component';
import { Hagitekst2Component } from './hagitekst2/hagitekst2.component';
import { Hagitekst3Component } from './hagitekst3/hagitekst3.component';
import { RobotnuppComponent } from './robotnupp/robotnupp.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
//    Injectable,
    HttpClientModule,
    ReactiveFormsModule,
    //RouterModule.forRoot([
    //  { path: '', component: ProductListComponent },
    //]),
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: AvalehtComponent },
      //{ path: '', component: ProductListComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    AvalehtComponent,
    Alaleht1Component,
    Alaleht2Component,
    Alaleht3Component,
    Alaleht4Component,
    RobotComponent,
    RbtComponent,
    HagiComponent,
    HagikirjutamineComponent,
    HagitekstComponent,
    Hagitekst2Component,
    Hagitekst3Component,
    RobotnuppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/