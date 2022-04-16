import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoDatabindingComponent } from './two-databinding/two-databinding.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { StructureDirectiveComponent } from './structure-directive/structure-directive.component';
import { TdfComponent } from './tdf/tdf.component';
import { MdfComponent } from './mdf/mdf.component';
import { EntryComponent } from './entry/entry.component';
import { ViewComponent } from './view/view.component';
import {HttpClientModule} from "@angular/common/http";
import { PostviewComponent } from './postview/postview.component';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoDatabindingComponent,
    StructureDirectiveComponent,
    TdfComponent,
    MdfComponent,
    EntryComponent,
    ViewComponent,
    PostviewComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
