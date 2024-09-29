import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { IncomeList } from 'src/app/models/income-list.model';
import { WhitchEdition } from 'src/app/models/whitch-edition.model';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss']
})
export class DiagramComponent implements AfterViewInit, OnInit {
  @ViewChild('myChart', { static: false }) myChartRef!: ElementRef<HTMLCanvasElement>;

  public chart!: Chart<'bar' | 'doughnut', number[], string>;

  public toggleLabel: string = 'Bar Chart';
  chartType = 'bar';
  public items: WhitchEdition[] = [];

  constructor(private dataService: DataService) {
    this.dataService.loadMergedLists();
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.loadDatas();
  }

  public loadDatas():void {
    this.dataService.list$.subscribe((data: WhitchEdition[] | IncomeList[]) => {
      this.items = data as WhitchEdition[];
    });
  }

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  public barChartLabels: string[] = ['Salary', 'Debts', 'Subscribers', 'Housing costs', 'School expenses', 'etc'];
  public barChartData = [12, 19, 3, 5, 2, 3];

  ngAfterViewInit(): void {
    if (this.myChartRef) {
      this.renderChart("bar");
    }
  }

  private renderChart(chartType: any): void {
    this.barChartData = [0, 0, 0, 0, 0, 0];
  
    for (const item of this.items) {
      if (item.kind === 'Salary') {
        this.barChartData[0] += item.value;
      } else if (item.kind === 'Debts') {
        this.barChartData[1] += item.value;
      } else if (item.kind === 'Subscribers') {
        this.barChartData[2] += item.value;
      } else if (item.kind === 'Housing costs') {
        this.barChartData[3] += item.value;
      } else if (item.kind === 'School expenses') {
        this.barChartData[4] += item.value;
      } else if (item.kind === 'etc') {
        this.barChartData[5] += item.value;
      }
    }
  
    const total = this.barChartData.reduce((acc, value) => acc + value, 0);
  
    if (total > 0) {
      this.barChartData = this.barChartData.map(value => (value / total) * 100);
    }
  
    if (this.chart) {
      this.chart.destroy(); 
    }
  
    if (this.myChartRef) {
      this.chart = new Chart(this.myChartRef.nativeElement, {
        type: chartType,
        data: {
          labels: this.barChartLabels,
          datasets: [{
            label: 'Percentage',
            data: this.barChartData,
            borderWidth: 1,
          }]
        },
        options: {
          ...this.barChartOptions,
          plugins: {
            tooltip: {
              callbacks: {
                label:  context => {
                  const label = context.dataset.label || '';
                  const value = context.raw as number;
                  return label + ': ' + value.toFixed(2) + '%'; 
                }
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: value => {
                  return value + '%'; 
                }
              }
            }
          }
        }
      });
    }
  }
  

  public toggleChart(): void {
    const newChartType: 'bar' | 'doughnut' = this.toggleLabel === 'Bar Chart' ? 'doughnut' : 'bar';
    this.toggleLabel = this.toggleLabel === 'Bar Chart' ? 'Doughnut Chart' : 'Bar Chart';
    this.renderChart(newChartType);
  }
}
