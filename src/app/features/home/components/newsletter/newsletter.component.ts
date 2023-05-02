import {Component} from "@angular/core";
import {AlertmessageEnum} from "src/app/core/enum/alertmessage.enum";
import {SubscribeService} from "../../../../core/services/subscribe.service";
import {SubscribeModel} from "../../../../core/models/subscribe.model";

@Component({
    selector: "home-newsletter",
    templateUrl: "./newsletter.component.html",
    styleUrls: ["./newsletter.component.scss"]
})
export class NewsletterComponent {

    content: string = "";
    isSubmit: boolean = false;
    clear: any;
    placeholder: AlertmessageEnum = AlertmessageEnum.email;
    submitSuccessAlert: AlertmessageEnum = AlertmessageEnum.newsletterSuccess;

    constructor(private subscribeService: SubscribeService) {
    }

    onSendSubscribe = (event: HTMLInputElement) => {
        if(event.value !== ""){
            this.subscribeService.createSubscribe(event.value).subscribe({
                next: ((value:SubscribeModel) => {
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