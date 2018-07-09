import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CommentService {
	endPoint: string = "http://localhost:5003/";
	constructor(private http: Http) { }

	getComments() {
		return this.http.get(this.endPoint + 'comments');
	}

	getCommentById(id) {
		return this.http.get(this.endPoint + 'comments?id=' + id);
	}

	deleteById(id) {
		return this.http.delete(this.endPoint + 'comments/'+ id);
	}

	postComment(comment) {
		return this.http.post(this.endPoint + 'comments', comment);
	}

	updateComment(comment) {
		comment.comment = "Sample "+ comment.comment;

		return this.http.put(this.endPoint + 'comments/'+ comment.id, comment);
	}

}
