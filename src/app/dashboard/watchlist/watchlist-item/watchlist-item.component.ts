import {Component, Input, OnInit} from '@angular/core';
import {Symbol} from '../../../symbols/symbol.model';

@Component({
	selector: 'mw-watchlist-item',
	templateUrl: './watchlist-item.component.html',
	styleUrls: ['./watchlist-item.component.scss']
})
export class WatchlistItemComponent implements OnInit {

	@Input() symbol: Symbol;
	@Input() index: number;

	source: String;

	constructor() {
	}

	ngOnInit() {
		if (this.symbol.difference > 0 ) {
			this.source = 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Green-Up-Arrow.svg';
		}
		if (this.symbol.difference < 0 ) {
			this.source = 'https://upload.wikimedia.org/wikipedia/commons/6/62/RedDownArrow.svg';
		}
		if (this.symbol.difference === 0 ) {
			this.source = 'https://svgur.com/i/8pZ.svg';
		}
	}

}
