import { Component, OnInit } from '@angular/core';

const LINE_CHART_SAMPLE_DATA: any[] = [
  { data: [32, 14, 46, 23, 38, 56], label: 'Sentimental Analysis' },
  { data: [12, 18, 26, 13, 28, 26], label: 'Image Recognition' },
  { data: [52, 34, 49, 53, 68, 66], label: 'Forecasting' },
];

const LINE_CHART_LABELS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'jun'];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit {
  constructor() {}

  public lineChartData: any[] = LINE_CHART_SAMPLE_DATA;
  public lineChartLabels: string[] = LINE_CHART_LABELS;
  public lineChartType: any = 'line';
  public lineChartLegend: boolean = true;
  public lineChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  ngOnInit(): void {}
}
