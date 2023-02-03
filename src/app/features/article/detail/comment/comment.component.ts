import {Component, OnInit} from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: "article-comment",
    templateUrl: "./comment.component.html",
    styleUrls: ["./comment.component.scss"]
})
export class CommentComponent implements OnInit {

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        console.log(form.value);
    }
}