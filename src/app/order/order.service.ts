import { Injectable } from '@angular/core'

import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service'
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model'

@Injectable()

export class OrderService {
	
	constructor(private cartService: ShoppingCartService) {}

	cartItems(): CartItem[]{
		return this.cartService.items
	}

	aumentarQtd(item: CartItem){
		this.cartService.aumentarQtd(item)
	}

	diminuirQtd(item: CartItem){
		this.cartService.diminuirQtd(item)
	}

	remover(item: CartItem){
		this.cartService.removeItem(item)
	}

}