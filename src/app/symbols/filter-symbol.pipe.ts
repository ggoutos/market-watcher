import {Pipe, PipeTransform} from '@angular/core';
import {Symbol} from "./symbol.model";

@Pipe({
	name: 'filterSymbol'
})
export class FilterSymbolPipe implements PipeTransform {
	transform(items: Symbol[], filterStr: string): any {
		if (!items || !filterStr) {
			return items;
		}

		return items.filter(
			item =>
				item.id.toLowerCase().includes(filterStr.toLowerCase()) ||
				item.description.toLowerCase().includes(filterStr.toLowerCase())
		);
	}
}
