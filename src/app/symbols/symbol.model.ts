export class Symbol {
	public id: string;
	public description: string;
	public currency: string;
	public stockExchangeLong: string;
	public price: number;
	public difference: number;


	constructor(id: string, description: string, currency: string, stockExchangeLong: string, price: number, difference: number) {
		this.id = id;
		this.description = description;
		this.currency = currency;
		this.stockExchangeLong = stockExchangeLong;
		this.price = price;
		this.difference = difference;
	}
}
