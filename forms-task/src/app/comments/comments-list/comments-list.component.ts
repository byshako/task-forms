import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../comments.service';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  allComments: any[];

  constructor(private commentsServece: CommentsService) { }

  ngOnInit() {
    this.allComments = this.commentsServece.commentsData;
  }
}
