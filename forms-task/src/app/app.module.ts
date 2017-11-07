import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommentsListComponent } from './comments/comments-list/comments-list.component';
import { CommentComponent } from './comments/comment/comment.component';
import { CommentsFormComponent } from './comments/comments-form/comments-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsListComponent,
    CommentComponent,
    CommentsFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
