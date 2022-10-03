import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../../model/hotel';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  text = 'Milano'
  hotels: Hotel[] | undefined;  
  
  constructor(private http: HttpClient) {  
  }

  ngOnInit(): void {
    this.searchHotels(this.text)
  }

  searchHotels(text: string) {
    this.text = text;
    this.http.get<Hotel[]>('http://localhost:3000/hotels?q=' + text)
    .subscribe(result => {
      this.hotels = result;
      console.log(this.hotels)
    });
  }

}
