import {Component, OnInit} from '@angular/core';
import {Symbol} from '../../symbols/symbol.model'


@Component({
	selector: 'mw-watchlist',
	templateUrl: './watchlist.component.html',
	styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {

	public symbols: Symbol[];

	constructor() {
	}

	ngOnInit() {
		this.generateSymbols();
	}

	generateSymbols() {
		this.symbols = [
			new Symbol('000001.SZ', 'Ping An Bank Co Ltd', 'CNY', 'Shenzhen Stock Exchange', 185.22, +1),
			new Symbol('000002.SZ', 'VANKEA/Shs A Vtg 1.00', 'CNY', 'Shenzhen Stock Exchange', 650.60, 0),
			new Symbol('000004.SZ', 'Shenzhen Cau Technology CoLtd.', 'CNY', 'Shenzhen Stock Exchange', 127.82, -1),
		];
	}

}
