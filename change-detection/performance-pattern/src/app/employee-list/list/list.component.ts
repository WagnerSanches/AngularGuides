import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { List } from 'immutable';
import { EmployeeData } from 'src/app/shared/list-generator.service';

const fibonacci = (num: number): number => {
  if(num === 1 || num === 2){
    return 1;
  }

  return fibonacci(num  - 1) + fibonacci(num - 2);
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {

  @Input() data: List<EmployeeData> | null = null;
  @Output() remove = new EventEmitter<EmployeeData>();


  calculate(num: number) {
    return fibonacci(num);
  }

}
