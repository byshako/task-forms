import { Injectable } from '@angular/core';

@Injectable()
export class CommentsService {

  constructor() { }

  commentsData = [
    { 'name' : 'სახელი' , 'comment' : 'კომენტარი' , 'reply' : [{ 'name' : 'სახელი 2' , 'comment' : 'კომენტარი 2' }] },
    { 'name' : 'სახელი' , 'comment' : 'კომენტარი' , 'reply' : [{ 'name' : 'სახელი 2' , 'comment' : 'კომენტარი 2' }] },
    { 'name' : 'სახელი' , 'comment' : 'კომენტარი' , 'reply' : [{ 'name' : 'სახელი 2' , 'comment' : 'კომენტარი 2' }] },
    { 'name' : 'სახელი' , 'comment' : 'კომენტარი' , 'reply' : [{ 'name' : 'სახელი 2' , 'comment' : 'კომენტარი 2' }] },
    { 'name' : 'სახელი' , 'comment' : 'კომენტარი' , 'reply' : [] },
    {
      'name' : 'სახელი',
      'comment' : 'კომენტარი',
      'reply' : [
          { 'name' : 'სახელი 2' , 'comment' : 'კომენტარი 2' },
          { 'name' : 'სახელი 3' , 'comment' : 'კომენტარი 3' }
          ]
    }
  ];
  addComment() {
    this.commentsData.push(
        { 'name' : '' , 'comment' : '', reply : [] }
    )
  }
}
