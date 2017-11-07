import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CommentsService} from "../../comments.service";

@Component({
    selector: 'app-comments-form',
    templateUrl: './comments-form.component.html',
    styleUrls: ['./comments-form.component.css']
})
export class CommentsFormComponent implements OnInit {

    constructor(private commentService: CommentsService) {
    }

    ngOnInit() {
    }

    onSubmit(comment: NgForm) {
        console.log(comment.value);
        this.commentService.addComment({
            name: comment.value.name,
            comment: comment.value.comment
        });
        comment.reset();
    }
}
