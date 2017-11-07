import {Injectable} from '@angular/core';

@Injectable()
export class CommentsService {
    private item: any = null;

    commentsData = [
        {name: 'სახელი', comment: 'კომენტარი', reply: [{name: 'სახელი 2', comment: 'კომენტარი 2'}]},
        {name: 'სახელი', comment: 'კომენტარი', reply: []},
        {
            name: 'სახელი',
            comment: 'კომენტარი',
            reply: [
                {name: 'სახელი 2', comment: 'კომენტარი 2'},
                {name: 'სახელი 3', comment: 'კომენტარი 3'}
            ]
        }
    ];

    constructor() {
    }

    public reply(item: any) {
        this.item = item;
    }

    addComment(comment) {
        if (this.item) {
            this.item.reply.push(comment);
            this.item = null;
        } else {
            this.commentsData.push(
                comment
            );
        }
    }
}
