import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
    selector: "article-comment",
    templateUrl: "./comment.component.html",
    styleUrls: ["./comment.component.scss"]
})
export class CommentComponent implements OnInit {

    commentForm: FormGroup | any;

    ngOnInit() {
        this.commentForm = new FormGroup({
            "name": new FormControl(null, Validators.required),
            "email": new FormControl(null, [Validators.email, Validators.required]),
            "phone": new FormControl(null, Validators.required),
            "comment": new FormControl(null, Validators.required)
        })
    }

    onSubmit() {
        console.log(this.commentForm.value);
    }
}