import {Component, Input, OnInit} from '@angular/core';
import {Symbol} from '../../../symbols/symbol.model';

@Component({
	selector: 'mw-chart-item',
	templateUrl: './chart-item.component.html',
	styleUrls: ['./chart-item.component.scss']
})
export class ChartItemComponent implements OnInit {
	@Input() symbol: Symbol;

	constructor() {
	}

	ngOnInit() {
	}

}
