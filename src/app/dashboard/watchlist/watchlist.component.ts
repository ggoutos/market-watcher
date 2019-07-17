import {Component, OnInit} from '@angular/core';
import {Symbol} from '../../symbols/symbol.model'
import {SymbolsService} from '../../symbols/symbols.service';

@Component({
	selector: 'mw-watchlist',
	templateUrl: './watchlist.component.html',
	styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {

	public symbols: Symbol[];

	constructor(private symbolsService: SymbolsService) {
	}

	ngOnInit() {
		this.symbols = this.symbolsService.getSymbols();
	}


}
