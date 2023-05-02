import {Component, OnInit} from "@angular/core";
import {AlertmessageEnum} from "src/app/core/enum/alertmessage.enum";
import {SubscribeService} from "../../../../core/services/subscribe.service";
import {SubscribeModel} from "../../../../core/models/subscribe.model";

@Component({
    selector: "home-newsletter",
    templateUrl: "./newsletter.component.html",
    styleUrls: ["./newsletter.component.scss"]
})
export class NewsletterComponent implements OnInit {

    content: string = "";
    isSubmit: boolean = false;
    clear: any;
    placeholder: AlertmessageEnum = AlertmessageEnum.email;
    submitSuccessAlert: AlertmessageEnum = AlertmessageEnum.newsletterSuccess;
    isLoading: boolean = false;

    constructor(private subscribeService: SubscribeService) {
    }

    ngOnInit() {
        this.isLoading = true;
    }

    onSendSubscribe = (event: HTMLInputElement) => {
        if(event.value !== ""){
            this.subscribeService.createSubscribe(event.value).subscribe({
                next: ((value:SubscribeModel) => {
                    this.isLoading = false;

                    this.content = "";
                    this.isSubmit = true;
                    this.clear = setTimeout(() => {
                        this.isSubmit = false;
                        clearTimeout(this.clear);
                    }, 3000);
                }),
                error: ((err: any) => { console.log(err) })
            });
        }

    }
}