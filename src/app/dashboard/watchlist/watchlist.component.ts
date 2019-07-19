import {Component, OnInit} from '@angular/core';
import {Symbol} from '../../symbols/symbol.model'
import {SymbolsService} from '../../symbols/symbols.service';
import {WorldTradingDataService} from '../../shared/world-trading-data.service';
import {JsonPipe} from '@angular/common';

@Component({
	selector: 'mw-watchlist',
	templateUrl: './watchlist.component.html',
	styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {

	public symbols: Symbol[];

	constructor(private symbolsService: SymbolsService,
				private worldTradingDataService: WorldTradingDataService) {
	}

	ngOnInit() {
		this.symbols = this.symbolsService.getSymbols();

		//call api to get price and difference
		this.symbols.forEach((symbol: Symbol) => {
			let symbolData = JSON.parse(this.worldTradingDataService.getPrices(symbol));
			console.log(symbolData);
		});
	}


}

