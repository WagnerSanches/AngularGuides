import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeListModule } from './employee-list/employee-list.module';
import { ListGenerator } from './shared/list-generator.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EmployeeListModule,
    BrowserAnimationsModule
  ],
  providers: [ListGenerator],
  bootstrap: [AppComponent]
})
export class AppModule { }
