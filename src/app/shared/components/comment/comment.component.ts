import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReplyService} from "../../../core/services/reply.service";

@Component({
    selector: "blog-comment",
    templateUrl: "./comment.component.html",
    styleUrls: ["./comment.component.scss"]
})
export class CommentComponent implements OnInit {

    @Input() comment: any;
    @Input() aid?: number;
    @Output() output = new EventEmitter<boolean>();

    replyForm: FormGroup | any;
    openReply: boolean = false;

    constructor(private replyService: ReplyService) {
    }

    ngOnInit() {
        this.replyForm = new FormGroup({
            "name": new FormControl(null, Validators.required),
            "email": new FormControl(null, [Validators.email, Validators.required]),
            "comment": new FormControl(null, Validators.required)
        });
    }

    onSubmit() {
        this.replyForm.value["id"] = this.comment._id;
        this.replyForm.value["postId"] = this.aid;

        this.replyService.createReply(this.replyForm.value).subscribe({
            next: ((value: any) => {
                this.output.emit(true);
            }),
            error: ((err: any) => { console.log(err) })
        });
    }

    onOpenReply() {
        this.openReply = !this.openReply;
        this.replyForm.reset({});
    }
}