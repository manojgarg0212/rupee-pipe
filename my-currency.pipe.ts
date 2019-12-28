import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({ name: 'myCurrency' })
export class MyCurrencyPipe extends CurrencyPipe implements PipeTransform {
	transform(
		value: any,
		currencyCode: string,
		symbolDisplay: boolean,
		digits: string,
	): string {
		const currencyFormat = super.transform(
			value,
			currencyCode,
			symbolDisplay,
			digits,
		);
		const firstDigit = currencyFormat.search(/\d/);
		return (
			currencyFormat.substring(0, firstDigit) +
			' ' +
			currencyFormat.substr(firstDigit)
		);
	}
}
