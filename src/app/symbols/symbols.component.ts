import {Component, OnInit} from '@angular/core';
import {Symbol} from "./symbol.model";
import {SymbolsService} from "./symbols.service";

@Component({
	selector: 'mw-symbols',
	templateUrl: './symbols.component.html',
	styleUrls: ['./symbols.component.scss']
})
export class SymbolsComponent implements OnInit {
	symbols: Symbol[];

	constructor(private symbolsService: SymbolsService) {
	}

	ngOnInit() {
		this.symbols = this.symbolsService.getSymbols();
	}

}
