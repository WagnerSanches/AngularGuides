import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EmployeeListComponent } from './employee-list.component';
import { MatListModule } from '@angular/material/list'
import { MatChipsModule } from '@angular/material/chips'
import { MatInputModule } from '@angular/material/input'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { NameInputComponent } from './name-input/name-input.component';
import { ListComponent } from './list/list.component'
import { CalculatePipe } from '../pipes/calculate.pipe';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [EmployeeListComponent, NameInputComponent, ListComponent, CalculatePipe],
  exports: [EmployeeListComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatListModule,
    MatChipsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    ScrollingModule
  ],
})
export class EmployeeListModule { }
