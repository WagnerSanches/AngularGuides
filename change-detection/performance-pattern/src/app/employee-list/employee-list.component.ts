import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeData } from '../shared/list-generator.service';

const fibonacci = (num: number): number => {
  if(num === 1 || num === 2){
    return 1;
  }

  return fibonacci(num  - 1) + fibonacci(num - 2);
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @Input() data: EmployeeData[] | null = null;
  @Input() department: string = '';

  @Output() remove = new EventEmitter<EmployeeData>();
  @Output() add = new EventEmitter<string>();

  label: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  handleKey(event: any) {
    if(event.keyCode === 13) {
      this.add.emit(this.label);
      this.label = '';
    }
  }

  calculate(num: number) {
    return fibonacci(num);
  }

}