import {Component, OnInit} from '@angular/core';
import {Credentials} from './auth.interfaces';
import {AuthService} from './auth.service';
import {StorageService} from './storage.service';
import {Router} from "@angular/router";

@Component({
	selector: 'mw-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	isLoginDisabled = false;
	password: string;

	constructor(private router: Router, private authService: AuthService, private storageService: StorageService) {
	}

	// tslint:disable-next-line:variable-name
	private _username: string;

	get username() {
		return this._username;
	}

	set username(name: string) {
		console.log('Setting username', name);
		this._username = name;
	}

	ngOnInit() {
	}

	login() {
		const {username, password} = this;
		const credentials: Credentials = {
			username,
			password
		};

		this.router.navigate(['/dashboard']);
		// this.authService.login(credentials)
		// 	.subscribe(jwt => {
		// 		this.storageService.set('token', jwt);
		// 		this.authService.isLoggedIn = true;
		// 	});

	}
}
