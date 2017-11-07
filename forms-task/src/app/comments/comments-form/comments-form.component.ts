import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comments-form',
  templateUrl: './comments-form.component.html',
  styleUrls: ['./comments-form.component.css']
})
export class CommentsFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit(comment: NgForm) {
    console.log(comment.value);
  }
}
