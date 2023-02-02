import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-hotel-form',
    templateUrl: './hotel-form.component.html',
    styleUrls: ['./hotel-form.component.css']
  })
  export class HotelFormComponent implements OnInit {
  

    @Input() text!: string;
    @Output() search: EventEmitter<string> = new EventEmitter<string>();


    ngOnInit(): void {
    }

      constructor(){}
    
  }