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
	private api_token = 'hC160T9XVkXPpFLKKGndSeHXsndIKnzIPx0DnH1R4bTB7qqSMwhMzdKcbVBA';

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

	getHistory(symbol: Symbol): Observable<any> {
		let params = {
			'symbol': symbol.id,
			'sort': 'newest',
			'api_token': this.api_token
		};

		return this.http.get('https://api.worldtradingdata.com/api/v1/history', {params});
	}

	convertData(name: string, data: any): Series[] {
		const result = {name, series: null};
		result.series = Object.keys(data[name.toLowerCase()]).map(k => ({
			name: k,
			value: +data[name.toLowerCase()][k].close
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
