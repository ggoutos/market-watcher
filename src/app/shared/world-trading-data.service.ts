import {Injectable} from '@angular/core';
import {Symbol} from '../symbols/symbol.model'
import {HttpBackend, HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Series} from "@swimlane/ngx-charts";
import {Intraday} from "../dashboard/chart-list/chart-item/intraday";

@Injectable({
	providedIn: 'root'
})
export class WorldTradingDataService {

	private http: HttpClient;
	private api_token = 'qTVQgCtNavDHni1Bq4BmATsjzmEWJgNmQUNF7G63zRyqVPRi9VUr5Xn0SLPD';

	constructor(handler: HttpBackend) {
		this.http = new HttpClient(handler);
	}

	getIntraday(symbol: Symbol): Observable<any> {
		let params = {
			'symbol': symbol.id,
			'range': '1',
			'interval': '1',
			'api_token': this.api_token
		};

		return this.http.get('https://intraday.worldtradingdata.com/api/v1/intraday', {params});
	}

	convertData(name: string, data: Intraday): Series[] {
		const result = {name, series: null};
		result.series = Object.keys(data.intraday).map(k => ({
			name: k,
			value: +data.intraday[k].close
		}));
		return [result];
	}

	getPrices(symbol: Symbol): Observable<any> {

		let params = {
			'symbol': symbol.id,
			'api_token': this.api_token
		};

		return this.http.get('https://api.worldtradingdata.com/api/v1/stock', {params});
	}
}
