import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Symbol} from '../../../symbols/symbol.model';
import {Series} from "@swimlane/ngx-charts";
import {SubSink} from "subsink";
import {WorldTradingDataService} from "../../../shared/world-trading-data.service";
import {Intraday} from "./intraday";
import {ActivatedRoute, Params} from "@angular/router";
import {SymbolsService} from "../../../symbols/symbols.service";

@Component({
	selector: 'mw-chart-item',
	templateUrl: './chart-item.component.html',
	styleUrls: ['./chart-item.component.scss']
})
export class ChartItemComponent implements OnInit, OnDestroy {
	index: number;
	symbol: Symbol;
	@Input() graph: string;

	stats: Series[];
	view: any[] = [700, 400];
	// options
	showXAxis = true;
	showYAxis = true;
	gradient = false;
	showLegend = true;
	showXAxisLabel = true;
	xAxisLabel = 'Day of the week';
	showYAxisLabel = true;
	yAxisLabel = 'Rate';
	colorScheme = {
		domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
	};
	// line, area
	autoScale = true;
	private subs = new SubSink();

	constructor(private route: ActivatedRoute,
				private symbolsService: SymbolsService,
				private worldTradingDataService: WorldTradingDataService) {
	}

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.index = +params['id'];
			this.symbol = this.symbolsService.getSymbol(this.index);

			let sub = null;
			if (this.graph === 'intraday') {
				sub = this.worldTradingDataService.getIntraday(this.symbol).subscribe((data: Intraday) => {
					this.stats = this.worldTradingDataService.convertData('Intraday', data);
				});
			}
			if (this.graph === 'history') {
				sub = this.worldTradingDataService.getHistory(this.symbol).subscribe((data: Intraday) => {
					this.stats = this.worldTradingDataService.convertData('History', data);
				});
			}

			console.log(this.stats);
			this.subs.add(sub);
		});

	}

	ngOnDestroy(): void {
		this.subs.unsubscribe();
	}

	onSelect(event: Event) {
		console.log(event);
	}

}
