import {Component, Input, OnInit} from '@angular/core';
import {Symbol} from '../../../symbols/symbol.model';
import {Series} from "@swimlane/ngx-charts";
import {SubSink} from "subsink";
import {WorldTradingDataService} from "../../../shared/world-trading-data.service";
import {StorageService} from "../../../login/storage.service";
import {Intraday} from "./intraday";

@Component({
	selector: 'mw-chart-item',
	templateUrl: './chart-item.component.html',
	styleUrls: ['./chart-item.component.scss']
})
export class ChartItemComponent implements OnInit {
	@Input() symbol: Symbol;

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

	constructor(private storageService: StorageService, private worldTradingDataService: WorldTradingDataService) {
	}

	ngOnInit() {
		const subscription = this.worldTradingDataService.getIntraday(this.symbol)
			.subscribe((data: Intraday) =>
				this.stats = this.worldTradingDataService.convertData('Intraday', data));
		console.log(this.stats);
		this.subs.add(subscription);
	}

	ngOnDestroy(): void {
		this.subs.unsubscribe();
	}

	onSelect(event: Event) {
		console.log(event);
	}

}
