import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Hotel } from "src/app/model/hotel";

@Component({
    selector: 'app-hotel-list',
    templateUrl: './hotel-list.component.html',
    styleUrls: ['./hotel-list.component.css']
  })
  export class HotelListComponent implements OnInit {
  
    @Input() hotels!: Hotel[];
    @Input() active!: Hotel;
    @Input() text!: string;
    @Output() setActive: EventEmitter<Hotel> = new EventEmitter<Hotel>();


    ngOnInit(): void {
    }

      constructor(){}

    
  }