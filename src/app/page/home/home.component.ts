import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public people_arr: any;

  constructor(private _apiServices: ApiService) {
    this.getAllPeople();
  }

  getAllPeople() {
    this._apiServices.getAllPeople().subscribe((response) => {
      console.log(response);
      this.people_arr = response.results;
    });
  }
}
