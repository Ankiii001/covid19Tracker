import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-display/data.service';
import { Covid19Data } from '../../shared/covid-19-data.model';

@Component({
  selector: 'app-total-cases',
  templateUrl: './total-cases.component.html',
  styleUrls: ['./total-cases.component.css']
})
export class TotalCasesComponent implements OnInit {
  Recovered = 0;
  Deceased = 0;
  TotalCases = 0;
  ActiveCases = 0;
  covid19Data: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getCovidData()
  }

  /**
   * API call to update total confirm, active, recovered and deceased cases.
   */
  public getCovidData(): void {
    
    this.dataService.getCovid19Data().subscribe((data: Covid19Data) => {
      if (data !== null) {
        this.covid19Data = data.statewise;
        this.ActiveCases = +this.covid19Data[0].active;
        this.Recovered = +this.covid19Data[0].recovered;
        this.Deceased = +this.covid19Data[0].deaths;
        this.TotalCases = +this.covid19Data[0].confirmed;
      }
    }, (error) => {
      console.log(error);
    });
  }
}
