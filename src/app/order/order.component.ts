import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model'

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

  constructor() { }

  ngOnInit() {
  }

}
