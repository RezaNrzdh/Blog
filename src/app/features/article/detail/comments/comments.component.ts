import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {CommentService} from "../../../../core/services/comment.service";
import {AlertmessageEnum} from "../../../../core/enum/alertmessage.enum";

@Component({
    selector: "article-comment",
    templateUrl: "./comments.component.html",
    styleUrls: ["./comments.component.scss"]
})
export class CommentsComponent implements OnInit {

    @Input() aid?: number;
    @Input() comments?: any;
    @Output() output = new EventEmitter<boolean>();

    commentForm: FormGroup | any;
    status?: number;
    showAlert: boolean = false;
    alertMessage?: string;
    clear: any;

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
                if(value.status === 201) {
                    this.alertMessage = AlertmessageEnum.contactUsSuccess;
                    this.showAlert = true;
                    this.status = value.status;

                    this.output.emit(true);

                    this.clear = setTimeout(() => {
                        this.showAlert = false;
                        clearTimeout(this.clear);
                    }, 3000);
                }
                else{
                    this.alertMessage = AlertmessageEnum.contactUsError;
                    this.showAlert = true;
                    this.status = value.status;
                }
            }),
            error: ((err) => console.log(err))
        });

        this.commentForm.reset({
            name: "",
            email: "",
            comment: ""
        });
    }

    UpdatePage = () => {
        this.output.emit(true);
    }

}