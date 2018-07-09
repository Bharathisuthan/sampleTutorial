import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-first',
	templateUrl: './first.component.html',
	styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

	constructor(private router: Router) { }

	ngOnInit() {
	}

	navToSecond() {
		this.router.navigate(['/second']);
	}
}
