import {Component, Input, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {CommentService} from "../../../../core/services/comment.service";

@Component({
    selector: "article-comment",
    templateUrl: "./comment.component.html",
    styleUrls: ["./comment.component.scss"]
})
export class CommentComponent implements OnInit {

    @Input() aid?: number;
    @Input() comments?: any;
    commentForm: FormGroup | any;
    openReply: boolean = false;

    constructor(private commentService: CommentService) {}

    ngOnInit() {
        this.commentForm = new FormGroup({
            "name": new FormControl(null, Validators.required),
            "email": new FormControl(null, [Validators.email, Validators.required]),
            "comment": new FormControl(null, Validators.required)
        });
    }

    onSubmit() {
        this.commentForm.value["id"] = this.aid;

        this.commentService.createComment(this.commentForm.value).subscribe({
            next: ((value: any) => {
                console.log(value)
            }),
            error: ((err) => console.log(err))
        });

        this.commentForm.reset({});
    }

    onOpenReply = () => {
        this.openReply = !this.openReply;
    }
}