export class Symbol {
	public id: String;
	public description: String;
	public currency: String;
	public stockExchangeLong: String;
	public price: number;
	public difference: number;


	constructor(id: String, description: String, currency: String, stockExchangeLong: String, price: number, difference: number) {
		this.id = id;
		this.description = description;
		this.currency = currency;
		this.stockExchangeLong = stockExchangeLong;
		this.price = price;
		this.difference = difference;
	}
}
