import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeData } from '../shared/list-generator.service';
import { List } from 'immutable';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @Input() data: List<EmployeeData> | null = null;
  @Input() department: string = '';

  @Output() remove = new EventEmitter<EmployeeData>();
  @Output() add = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


}
