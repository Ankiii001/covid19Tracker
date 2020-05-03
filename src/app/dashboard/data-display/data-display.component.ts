import { Component, OnInit, ViewEncapsulation, ViewChild  } from '@angular/core';
import { DataService } from '../../services/data.service'
import { Covid19Data} from '../../shared/covid-19-data.model';
import { DistrictData} from '../../shared/state-district.model';
import { StateWiseCases} from '../../shared/state-wise-case.model';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DataDisplayComponent implements OnInit {

  public innerWidth: number;

   /* colums */
   public gridColumns: any;
   public treeTableColumns: any;

  /* Data Variables */
  public covid19Data: any;
  public covid19DisplayData: any;
  public districtWiseData: any;
  
  public transformedDistrictWiseData: Array<DistrictData> = [];

  public paginator = {
    enable: false,
    isResizable: true,
    size: 0,
    isLazyEnabled: true,
    isLoading: false
  };

  constructor(private dataService: DataService, private loading: LoadingBarService) {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.getCovidData();
    this.getDistrictWiseData();
    this.gridColumns = this.dataService.getGridColumns();
    this.treeTableColumns = this.dataService.getTreeTableColumns();
  }

  

  /**
   * API call to get data.
   */
  public getCovidData(): void {
    this.paginator.isLoading = true;
    this.dataService.getCovid19Data().subscribe((data: Covid19Data) => {
      if (data !== null) {  
        this.paginator.isLoading = false;
        this.covid19Data = data.statewise;
        [this.covid19Data[0], this.covid19Data[this.covid19Data.length - 1]] =
          [this.covid19Data[this.covid19Data.length - 1], this.covid19Data[0]];
        this.covid19DisplayData = this.covid19Data.filter((cases: StateWiseCases) => {
          return (cases.confirmed !== 0);
        });
      }
    }, (error) => {
      this.paginator.isLoading = false;
      console.log(error);
    });
  }

  
  /**
   * API call to get district wise data.
   */
  public getDistrictWiseData(): void {
    this.paginator.isLoading = true;
    this.dataService.getDistrictWiseData().subscribe((data) => {
      if (data !== null) {
        this.paginator.isLoading = false;
        this.districtWiseData = data;
        this.transformDistrictWiseData(this.districtWiseData);
      }
    }, (error) => {
      this.paginator.isLoading = false;
      console.log(error);
    });
  }

  /**
   *
   * @param districtWiseData districtwiseData got from API call
   * Transforms API data.
   */
  transformDistrictWiseData(districtWiseData): void {
    for (const [key, value] of Object.entries(districtWiseData)) {
      for (const [key1, value1] of Object.entries(value)) {
        for (const [key2, value2] of Object.entries(value1)) {
          if (key1 !== 'statecode') {
          this.transformedDistrictWiseData.push({ state: key, 
            district: key2, 
            confirmed: value2['confirmed'], 
            active: value2['active'], 
            recovered: value2['recovered'], 
            deaths: value2['deceased']});
          }
        }
      }
    }
  }
}