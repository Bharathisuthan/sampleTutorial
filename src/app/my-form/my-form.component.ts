import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { CommentService } from '../comment.service';

@Component({
	selector: 'app-my-form',
	templateUrl: './my-form.component.html',
	styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit {
	myForm: FormGroup;
	comments: any = [];

	commentField: string;
	constructor(private formBuilder: FormBuilder, private commentService: CommentService) { }

	ngOnInit() {
		this.initForm();
		console.log(this.myForm);
		this.getAllComments();
	}

	initForm() {
		this.myForm = this.formBuilder.group({
			firstName: [null, [Validators.required, Validators.minLength(5)]],
			lastName: [null],
			age: '12',
			address: this.formBuilder.array([{
				street: 'ad',
				city: 'sdf',
				state: 'dsfdsfsd',
				zip: '12345'
			}])
		})
	}

	submit() {
		if (this.myForm.value.firstName === 'Ram' && this.myForm.value.lastName === 'Raj') {
			alert('Welcome ' + this.myForm.value.firstName + ' ' + this.myForm.value.lastName);
			let data = 'Welcome ' + this.myForm.value.firstName + ' ' + this.myForm.value.lastName;
			console.log(data.split(' '));
		} else {
			alert("Incorrect Data..!")
		}
	}

	patchValues() {
		let data = {
			firstName: 'Ram',
			lastName: 'Raj',
			// age: '15'
		}
		this.myForm.patchValue(data);
		console.log(this.myForm);
	}

	getAllComments() {
		this.commentService.getComments().subscribe((res) => {
			console.log(res.json());
			this.comments = res.json();
		}, (err) => {
			console.log(err);
		});
	}

	getCommentById(id) {
		this.commentService.getCommentById(id).subscribe((res) => {
			console.log(res.json());
			this.getAllComments();
		}, (err) => {
			console.log(err.json());
		})
	}

	deleteComment(id) {
		this.commentService.deleteById(id).subscribe((res) => {
			this.getAllComments();
			console.log(res.json());
		}, (err) => {
			this.getAllComments();
			console.log(err.json());
		})
	}

	postComment() {
		let comment= {
			comment: this.commentField
		}
		this.commentService.postComment(comment).subscribe((res) => {
			console.log(res.json());
			this.getAllComments();
		}, (err) => {
			console.log(err.json());
			this.getAllComments();
		})
	} 

	updateComment(comment) {
		this.commentService.updateComment(comment).subscribe((res) => {
			console.log(res.json());
			this.getAllComments();
		}, (err) => {
			console.log(err);
		})
	}

}
