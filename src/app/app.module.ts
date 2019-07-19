import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {SharedModule} from './shared/shared.module';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {WatchlistComponent} from './dashboard/watchlist/watchlist.component';
import {WatchlistItemComponent} from './dashboard/watchlist/watchlist-item/watchlist-item.component';
import {ChartItemComponent} from './dashboard/chart-list/chart-item/chart-item.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SymbolsComponent} from './symbols/symbols.component';
import {ChartListComponent} from './dashboard/chart-list/chart-list.component';
import {interceptorProviders} from './interceptors';
import {SymbolsService} from './symbols/symbols.service';
import {WorldTradingDataService} from './shared/world-trading-data.service';

@NgModule({
	declarations: [AppComponent, DashboardComponent, WatchlistComponent, WatchlistItemComponent, ChartItemComponent, SymbolsComponent, ChartListComponent, LoginComponent],
	imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, AppRoutingModule, SharedModule, FormsModule],
	providers: [WorldTradingDataService, SymbolsService, ...interceptorProviders],
	bootstrap: [AppComponent]
})
export class AppModule {
}
