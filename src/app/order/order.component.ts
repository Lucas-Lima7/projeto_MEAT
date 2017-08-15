import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'

import { Router } from '@angular/router'

import { RadioOption } from '../shared/radio/radio-option.model'
import { OrderService } from '../order/order.service'
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model'
import { Order, OrderItem } from './order.model'

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup

  delivery: number = 8

	paymentOptions: RadioOption[] = [
		{label: 'DINHEIRO', value: 'DIN'},
		{label: 'CARTAO DEBITO', value: 'DEB'},
		{label: 'CARTAO REFEIÇÃO', value: 'REF'}
	]

  constructor(private orderService: OrderService, private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  itemsValue(): number{
    return this.orderService.itemsValue()
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

  checkOrder(order: Order){
    order.orderItems = this.cartItems()
                    .map((item:CartItem) => new OrderItem(item.quantity, item.menuItem.id))
    this.orderService.checkOrder(order)
                     .subscribe((orderId: string) => {
      this.router.navigate(['/order-summary'])
      this.orderService.clear()
    })
    console.log(order)
  }

}
