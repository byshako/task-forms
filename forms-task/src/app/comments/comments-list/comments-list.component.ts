import {Component, OnInit} from '@angular/core';
import {CommentsService} from '../../comments.service';

@Component({
    selector: 'app-comments-list',
    templateUrl: './comments-list.component.html',
    styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent {
    constructor(public commentsService: CommentsService) {
    }
}
