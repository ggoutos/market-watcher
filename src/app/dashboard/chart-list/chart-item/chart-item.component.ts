import { Component, OnInit } from '@angular/core';
import {Symbol} from '../../../symbols/symbol.model';
import {ActivatedRoute, Params} from '@angular/router';
import {SymbolsService} from '../../../symbols/symbols.service';

@Component({
  selector: 'mw-chart-item',
  templateUrl: './chart-item.component.html',
  styleUrls: ['./chart-item.component.scss']
})
export class ChartItemComponent implements OnInit {
	index: number;
	symbol: Symbol;

	constructor(private route: ActivatedRoute, private symbolsService: SymbolsService) {
	}

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.index = +params['id'];
			this.symbol = this.symbolsService.getSymbol(this.index);
			console.log(this.symbol.description);
		});


	}



}
