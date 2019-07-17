import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';

@NgModule({
	declarations: [TopBarComponent, NavbarComponent, FooterComponent],
	imports: [CommonModule, RouterModule],
	exports: [TopBarComponent, NavbarComponent, FooterComponent],

})
export class SharedModule {}
