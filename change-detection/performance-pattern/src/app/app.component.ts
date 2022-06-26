import { ChangeDetectionStrategy, Component, NgZone, OnInit } from '@angular/core';
import { EmployeeData, ListGenerator } from './shared/list-generator.service';
import { List } from 'immutable';

import { Sales } from './Data/sales-70-27-30';
import { Rnd } from './Data/rnd-70-27-30';

import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';

PlotlyModule.plotlyjs = PlotlyJS;

const NumRange: [number, number] = [23, 28];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  salesList = List(Sales);
  rndList = List(Rnd);

  title = 'performance-pattern';

  constructor(private generator: ListGenerator, private zone: NgZone) {}

  ngOnInit(): void {
    const data: [{x: string[], y: number[], type: 'bar'}] = [{
      x: [],
      y: [],
      type: 'bar'
    }]

    const values = new Map<number, number>();
    this.salesList.concat(this.rndList).forEach(employee => {
      if(values.has(employee.num)) {
        values.set(employee.num, values.get(employee.num)! + 1)
      } else {
        values.set(employee.num, 1);
      }
    })

    for (const entity of values.entries()) {
      data[0].x.push(entity[0].toString());
      data[0].y.push(entity[1]);
    }

    this.zone.runOutsideAngular(() => PlotlyJS.newPlot('chart', data));
  }

  add(list: List<EmployeeData>, name: string) {
    return list.unshift({label: name, num: this.generator.generateNumber(NumRange)})
  }

  remove(list: List<EmployeeData>, node: EmployeeData) {
    return list.splice(list.indexOf(node), 1);
  }
}
