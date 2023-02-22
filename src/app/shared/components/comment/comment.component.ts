import {Component, Input, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: "blog-comment",
    templateUrl: "./comment.component.html",
    styleUrls: ["./comment.component.scss"]
})
export class CommentComponent implements OnInit {

    @Input() comment: any;
    replyForm: FormGroup | any;
    openReply: boolean = false;

    ngOnInit() {
        this.replyForm = new FormGroup({
            "name": new FormControl(null, Validators.required),
            "email": new FormControl(null, [Validators.email, Validators.required]),
            "comment": new FormControl(null, Validators.required)
        });
    }

    onSubmit() {
        this.replyForm.value["id"] = this.comment._id;
        console.log(this.replyForm.value);
    }

    onOpenReply() {
        this.openReply = !this.openReply;
        this.replyForm.reset({});
    }
}