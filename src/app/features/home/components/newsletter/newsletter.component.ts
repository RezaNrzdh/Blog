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

    placeholder: AlertmessageEnum = AlertmessageEnum.email;

    constructor(private subscribeService: SubscribeService) {
    }

    onSendSubscribe = (event: HTMLInputElement) => {
        if(event.value !== ""){
            this.subscribeService.createSubscribe(event.value).subscribe({
                next: ((value:SubscribeModel) => {
                    console.log(value);
                }),
                error: ((err: any) => { console.log(err) })
            });
        }

    }
}