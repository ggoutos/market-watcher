import {Injectable} from '@angular/core';
import {Symbol} from '../symbols/symbol.model'
import {HttpBackend, HttpClient} from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class WorldTradingDataService {

	private http: HttpClient;
	private api_token = 'nfiTrTgl6qSoU3YcyIcpDSjTMEw26Ok0UavcmDRQ1Cy9nZi4m4Syb0yJ4bcV';

	constructor(handler: HttpBackend) {
		this.http = new HttpClient(handler);
	}

	getPrices(symbol: Symbol): any {

		let params = {
			'symbol': symbol.id,
			'api_token': this.api_token
		};

		this.http.get('https://api.worldtradingdata.com/api/v1/stock', {observe: 'body', params, responseType: 'json'})
			.subscribe(value => {
				//console.log(JSON.stringify(value));
				return value;
			}, error => {
				console.log(error);
				return error;
			});
	}
}
