import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements OnInit {
  constructor() {}

  // pieChartData: any[] = [350, 450, 120];
  public pieChartLabels: string[] = ['XYZ logistics', 'Cudsun'];
  // pieChartColors: any[] = [
  //   {
  //     backgroudColor: ['#26547c', '#ff6b6b', '#ffd166'],
  //   },
  // ];
  public pieChartType: any = 'pie';
  public pieChartLegend: boolean = true;
  public pieChartData: ChartData<'pie'> = {
    datasets: [
      {
        label: 'Title label',
        data: [350, 450, 120],
        backgroundColor: ['#26547c', '#ff6b6b', '#ffd166'],
        hoverBackgroundColor: ['darkred', 'darkgreen', 'darkblue'],
      },
    ],
  };
  ngOnInit(): void {}
}
