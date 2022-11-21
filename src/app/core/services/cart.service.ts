import {Injectable} from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';
import {Hotel, Room} from '../../model/hotel';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

    items: CartItem[] = [];

    constructor(private auth: AuthService) {}

    addToCart(hotel: Hotel | undefined, room: Room | undefined) {
        if (hotel && room) {
          this.items = [
            ...this.items,
            {
              hotel: hotel,
              room: room,
              creationDate: Date.now()
            }
          ];
        }
      }
    

    removeFromCart(cartItem: CartItem) {
        this.items = this.items.filter(item => item.creationDate !== cartItem.creationDate)
    }

    proceed() {
        window.alert(
          `Total Item: ${this.items.length}, Order: ${this.auth?.data?.name}`
          )
    }
  
}