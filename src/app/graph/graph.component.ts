import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Datas } from '../shared/data';
import companyData from '../ibm.json';
import companyData2 from '../MSFT_stock_data.json';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements OnInit {
  graphData = 'open';
  public canvas: any;
  chart;
  dataz1: Datas[] = companyData;
  dataiDate = companyData.map((e) => {
    return parseFloat(e.date);
  });
  dataiOpen1 = companyData.map((e) => {
    return parseFloat(e.open);
  });
  dataiOpen2 = companyData2.map((e) => {
    return parseFloat(e.open);
  });

  dataz2: Datas[] = companyData2;
  graphdata1 = [];
  graphdata2 = [];
  public ctx: any;
  public labels = this.dataiDate.reverse();
  public dataCases = {
    chart1: this.dataiOpen1,
    chart2: this.dataiOpen2,
  };
  datadetails = {
    labels: this.labels,
    datasets: [
      {
        label: 'IBM Chart',
        data: this.dataCases.chart1,
        backgroundColor: '#ffbb33',
        borderColor: '#ffbb33',
        fill: false,
        borderWidth: 2,
      },
      {
        label: 'MSFT Chart',
        data: this.dataCases.chart2,
        backgroundColor: '#ff4444',
        borderColor: '#ff4444',
        fill: false,
        borderWidth: 2,
      },
    ],
  };

  data = [this.labels, this.datadetails];
  constructor() {
    Chart.register(...registerables);
  }

  onChaning() {
    if (this.graphData === 'close') {
      this.chart.destroy();

      this.dataiOpen1 = companyData.map((e) => {
        return parseFloat(e.close);
      });
      this.dataiOpen2 = companyData2.map((e) => {
        return parseFloat(e.close);
      });
      console.log(this.dataiOpen1);
    }
    if (this.graphData === 'open') {
      this.chart.destroy();

      this.dataiOpen1 = companyData.map((e) => {
        return parseFloat(e.open);
      });
      this.dataiOpen2 = companyData2.map((e) => {
        return parseFloat(e.open);
      });
      console.log(this.dataiOpen1);
    }
    if (this.graphData === 'high') {
      this.chart.destroy();

      this.dataiOpen1 = companyData.map((e) => {
        return parseFloat(e.high);
      });
      this.dataiOpen2 = companyData2.map((e) => {
        return parseFloat(e.high);
      });
      console.log(this.dataiOpen1);
    }
    if (this.graphData === 'low') {
      this.chart.destroy();

      this.dataiOpen1 = companyData.map((e) => {
        return parseFloat(e.low);
      });
      this.dataiOpen2 = companyData2.map((e) => {
        return parseFloat(e.low);
      });
      console.log(this.dataiOpen1);
    }
    if (this.graphData === 'adjust') {
      this.chart.destroy();

      this.dataiOpen1 = companyData.map((e) => {
        return parseFloat(e.adjustedClose);
      });
      this.dataiOpen2 = companyData2.map((e) => {
        return parseFloat(e.adjustedClose);
      });
    }
    if (this.graphData === 'volume') {
      this.chart.destroy();

      this.dataiOpen1 = companyData.map((e) => {
        return parseFloat(e.volume);
      });
      this.dataiOpen2 = companyData2.map((e) => {
        return parseFloat(e.volume);
      });
    }
    if (this.graphData === 'divid') {
      this.chart.destroy();

      this.dataiOpen1 = companyData.map((e) => {
        return parseFloat(e.dividendAmount);
      });
      this.dataiOpen2 = companyData2.map((e) => {
        return parseFloat(e.dividendAmount);
      });
    }

    this.chart.destroy();
    this.dataCases = {
      chart1: this.dataiOpen1,
      chart2: this.dataiOpen2,
    };
    this.datadetails = {
      labels: this.labels,
      datasets: [
        {
          label: 'IBM Chart',
          data: this.dataCases.chart1,
          backgroundColor: '#ffbb33',
          borderColor: '#ffbb33',
          fill: false,
          borderWidth: 2,
        },
        {
          label: 'MSFT Chart',
          data: this.dataCases.chart2,
          backgroundColor: '#ff4444',
          borderColor: '#ff4444',
          fill: false,
          borderWidth: 2,
        },
      ],
    };
    this.createLineChart(this.labels, this.dataCases, 'myChart');
  }

  ngOnInit(): void {
    this.graphdata1 = [...this.dataz1];
    this.graphdata2 = [...this.dataz2];
    this.createLineChart(this.labels, this.dataCases, 'myChart');
  }

  private createLineChart(labels, dataCases, chartId) {
    this.canvas = document.getElementById(chartId);
    this.ctx = this.canvas.getContext('2d');

    this.chart = new Chart(this.ctx, {
      type: 'line',
      data: this.datadetails,
      options: {},
    });
  }
}
