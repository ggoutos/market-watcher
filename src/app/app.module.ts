import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {WatchlistComponent} from './dashboard/watchlist/watchlist.component';
import {WatchlistItemComponent} from './dashboard/watchlist-item/watchlist-item.component';
import {ChartComponent} from './dashboard/chart/chart.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { SymbolsComponent } from './symbols/symbols.component';
import { ChartListComponent } from './dashboard/chart-list/chart-list.component';

@NgModule({
	declarations: [AppComponent, DashboardComponent, WatchlistComponent, WatchlistItemComponent, ChartComponent, SymbolsComponent, ChartListComponent],
	imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, AppRoutingModule, SharedModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
