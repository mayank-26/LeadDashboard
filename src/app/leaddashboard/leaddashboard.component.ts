import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';

export interface PeriodicElement {
  parameter: string;
  value: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {parameter: 'Lead Status', value: 'Raw'},
    {parameter: 'Enquiry Date', value: '2021-04-22 06:14:22'},
      {parameter: 'Product Name', value: 'Dress Material'},
        {parameter: 'Enquiry Message', value: 'I a  m interested in buying dress material'},
          {parameter: 'Query Type', value: 'Wholesaler'},
           {parameter: 'City', value: 'Hyderabad'},
             {parameter: 'Entry Date', value: '2021-04-22 06:34:56'}, 
 
  
];
const ELEMENT_DATA1: PeriodicElement[] = [
  {parameter: 'TeleCaller', value: 'Gaurav Gupta'},
    {parameter: 'Lead Count', value: '0'},
      {parameter: 'Enquiry Address', value: 'Hyderabad,Telangana'},
        {parameter: 'Subject', value: 'Requirement For Dress Material'},
          {parameter: 'State', value: 'Telangana'},
           {parameter: 'Plan', value: 'Jaipur'},

 
  
];
@Component({
  selector: 'app-leaddashboard',
  templateUrl: './leaddashboard.component.html',
  styleUrls: ['./leaddashboard.component.css'],
   encapsulation: ViewEncapsulation.None
})
export class LeaddashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 displayedColumns: string[] = ['parameter', 'value'];
  dataSource = ELEMENT_DATA;
  
  dataToDisplay = [...ELEMENT_DATA1];

   dataSource1 = new ExampleDataSource(this.dataToDisplay);

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA1.length);
    this.dataToDisplay = [
      ...this.dataToDisplay,
      ELEMENT_DATA1[randomElementIndex]
    ];
    this.dataSource1.setData(this.dataToDisplay);
  }

  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource1.setData(this.dataToDisplay);
  }








}
class ExampleDataSource extends DataSource<PeriodicElement> {
  private _dataStream = new ReplaySubject<PeriodicElement[]>();

  constructor(initialData: PeriodicElement[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<PeriodicElement[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: PeriodicElement[]) {
    this._dataStream.next(data);
  }
}