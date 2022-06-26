import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { List } from 'immutable';
import { EmployeeData } from 'src/app/shared/list-generator.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {

  @Input() data: List<EmployeeData> | null = null;
  @Output() remove = new EventEmitter<EmployeeData>();

}
