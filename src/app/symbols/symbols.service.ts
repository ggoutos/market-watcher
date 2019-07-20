import {Injectable} from '@angular/core';
import {Symbol} from './symbol.model';
import {HttpClient} from "@angular/common/http";

@Injectable({
	providedIn: 'root'
})
export class SymbolsService {

	public symbols: Symbol[];

	constructor(private httpClient: HttpClient) {
		// call backend
		//this.getSymbolsFromBackend();

		 this.generateSymbols();
	}

	getSymbols() {
		return this.symbols.slice();
	}

	getSymbol(index: number) {
		return this.symbols[index];
	}

	generateSymbols() {
		this.symbols = [
			new Symbol('000001.SZ', 'Ping An Bank Co Ltd', 'CNY', 'Shenzhen Stock Exchange', 0, null),
			new Symbol('000002.SZ', 'VANKEA/Shs A Vtg 1.00', 'CNY', 'Korean Stock Exchange', 0, null),
			new Symbol('000004.SZ', 'Shenzhen Cau Technology CoLtd.', 'CNY', 'Hong Kong Stock Exchange', 0, null)
		];
	}

	private getSymbolsFromBackend() {
		this.httpClient.get('api/getallsymbols');
	}
}
