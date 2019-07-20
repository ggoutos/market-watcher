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
			this.worldTradingDataService.getPrices(symbol).subscribe(value => {
					let index = this.symbols.indexOf(symbol);

					this.symbols[index].price = value.data[0].price;
					this.symbols[index].difference = value.data[0].price - value.data[0]['close_yesterday'];
			}, error1 => {

			});
		});
	}


}

