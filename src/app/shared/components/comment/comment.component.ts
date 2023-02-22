import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: "blog-comment",
    templateUrl: "./comment.component.html",
    styleUrls: ["./comment.component.scss"]
})
export class CommentComponent implements OnInit {

    @Input() comment: any;
    openReply: boolean = false;

    ngOnInit() {

    }

    onOpenReply() {
        this.openReply = !this.openReply;
    }
}