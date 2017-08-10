import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model'

import { OrderService } from '../order/order.service'
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model'

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

	paymentOptions: RadioOption[] = [
		{label: 'DINHEIRO', value: 'DIN'},
		{label: 'CARTAO DEBITO', value: 'DEB'},
		{label: 'CARTAO REFEIÇÃO', value: 'REF'}
	]

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  cartItems(): CartItem[] {
  	return this.orderService.cartItems()
  }

  aumentarQtd(item: CartItem){
  	this.orderService.aumentarQtd(item)
  }

  diminuirQtd(item: CartItem){
  	this.orderService.diminuirQtd(item)
  }

  remover(item: CartItem){
  	this.orderService.remover(item)
  }

}
