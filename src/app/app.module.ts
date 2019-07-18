import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {WatchlistComponent} from './dashboard/watchlist/watchlist.component';
import {WatchlistItemComponent} from './dashboard/watchlist/watchlist-item/watchlist-item.component';
import {ChartItemComponent} from './dashboard/chart-list/chart-item/chart-item.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {SymbolsComponent} from './symbols/symbols.component';
import {ChartListComponent} from './dashboard/chart-list/chart-list.component';
import {SymbolsService} from './symbols/symbols.service';
import {LoginComponent} from './login/login.component';
import {interceptorProviders} from './interceptors';
import {FormsModule} from '@angular/forms';

@NgModule({
	declarations: [AppComponent, DashboardComponent, WatchlistComponent, WatchlistItemComponent, ChartItemComponent, SymbolsComponent, ChartListComponent, LoginComponent],
	imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, AppRoutingModule, SharedModule, FormsModule],
	providers: [SymbolsService, ...interceptorProviders],
	bootstrap: [AppComponent]
})
export class AppModule {
}
