import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../../model/hotel';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  text = 'Milano'
  active!: Hotel;
  hotels!: Hotel[]; 
  activeImage!: string; 
  
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
      //this.active = this.hotels[0]
      this.setActive(this.hotels[0])
    });
    
  }

  setActive(hotel: Hotel) {
    this.active = hotel;
    this.activeImage = hotel.images[0]
  }

  sendEmail({email, msg}: {email: string, msg: string}, form: NgForm) {
    window.alert(`sent:
    ${email}
    ${msg}
    ${this.active!.email}
    `);

    form.reset();
   
  }
}
