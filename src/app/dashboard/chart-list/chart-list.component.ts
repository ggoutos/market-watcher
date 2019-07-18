import {Component, OnInit, Output} from '@angular/core';
import {Symbol} from '../../symbols/symbol.model';
import {ActivatedRoute, Params} from '@angular/router';
import {SymbolsService} from '../../symbols/symbols.service';
import {WorldTradingDataService} from "../../shared/world-trading-data.service";

@Component({
	selector: 'mw-chart-list',
	templateUrl: './chart-list.component.html',
	styleUrls: ['./chart-list.component.scss']
})
export class ChartListComponent implements OnInit {

	index: number;
	symbol: Symbol;

	constructor(private route: ActivatedRoute,
				private symbolsService: SymbolsService,
				private worldTradingDataService: WorldTradingDataService) { }

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.index = +params['id'];
			this.symbol = this.symbolsService.getSymbol(this.index);

			this.worldTradingDataService.getPrices(this.symbol);
		});
	}

}
