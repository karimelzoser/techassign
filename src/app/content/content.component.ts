import { Component, OnInit } from '@angular/core';
import { Datas } from '../shared/data';
import companyData from '../ibm.json';
import companyData2 from '../MSFT_stock_data.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  openShow = true;
  highShow = true;
  lowShow = true;
  closeShow = true;
  adjustShow = true;
  volumeShow = true;
  dividShow = true;

  constructor() {}
  filterText;
  minDate: string;
  maxDate;
  indexMin = 5;
  indexMax = 9;
  loop;
  data: Datas[] = companyData;
  data2: Datas[] = companyData2;
  dataia: Datas[] = [];
  dataia2: Datas[] = [];
  filteredData = [];
  filteredData2 = [];
  ibm = true;
  msft = true;

  ibmOn() {
    this.ibm = true;
    this.msft = false;
  }
  msftOn() {
    this.ibm = false;
    this.msft = true;
  }
  allOn() {
    this.ibm = true;
    this.msft = true;
  }

  ngOnInit(): void {
    this.filteredData = [...this.data];
    this.filteredData2 = [...this.data2];
  }

  onChange() {
    this.indexMin = this.data.findIndex((x) => x.date === this.minDate);
    this.indexMax = this.data.findIndex((x) => x.date === this.maxDate);
    if (this.indexMin > this.indexMax) {
      for (let i = this.indexMax; i < this.indexMin + 1; i++) {
        this.filteredData = [];
        this.filteredData2 = [];
        this.dataia.push(this.data[i]);
        this.dataia2.push(this.data2[i]);
        this.filteredData = [...this.dataia];
        this.filteredData2 = [...this.dataia2];
      }
    } else {
      alert('Error !! ,Start Date Is After End Date');
    }
  }
}
