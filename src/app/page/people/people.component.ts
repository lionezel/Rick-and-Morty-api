import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  public people_arr: any;
  public page: number = 0;
  public search: string = '';

  constructor(private _apiServices: ApiService) {
    this.getAllPeople();
  }

  getAllPeople() {
    this._apiServices.getAllPeople().subscribe((response) => {
      console.log(response);
      this.people_arr = response.results;
    });
  }

  nextPage() {
    this.page += 5;
  }

  prevPage() {
    if (this.page > 0) {
      this.page -= 5;
    }
  }

  onSearch(search: string) {
    this.page = 0;
    this.search = search;
  }
}
