import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SymbolsComponent} from './symbols/symbols.component';
import {ChartListComponent} from './dashboard/chart-list/chart-list.component';

const routes: Routes = [
	{path: '', redirectTo: '/dashboard', pathMatch: 'full'},
	{
		path: 'dashboard',
		component: DashboardComponent,
		children: [
			{
				path: ':id',
				component: ChartListComponent
			}
		]
	},
	{
		path: 'symbols',
		component: SymbolsComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
