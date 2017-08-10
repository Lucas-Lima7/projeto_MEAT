import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../restaurant-detail/shopping-cart/cart-item.model'

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

	@Input() items: CartItem[]

	@Output() aumentarQtd = new EventEmitter<CartItem>()
	@Output() diminuirQtd = new EventEmitter<CartItem>()
	@Output() remover = new EventEmitter<CartItem>()

  constructor() { }

  ngOnInit() {
  }

  emitAumentarQtd (item: CartItem){
  	this.aumentarQtd.emit(item)
  }
  
  emitDiminuirQtd (item: CartItem){
  	this.diminuirQtd.emit(item)
  }

  emitRemover (item: CartItem){
  	this.remover.emit(item)
  }

}
