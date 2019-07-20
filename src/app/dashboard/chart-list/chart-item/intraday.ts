export class Intraday {
	intraday: IntradayDate;
}

export type IntradayDate = Record<string, IntradayItem>;

export class IntradayItem {
	open: string;
	close: string;
	high: string;
	low: string;
	volume: string;
}
