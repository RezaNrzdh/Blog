import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from 'src/app/core/services/contact.service';
import { ContactModel } from 'src/app/core/models/contact.model';
import { AlertmessageEnum } from 'src/app/core/enum/alertmessage.enum';

@Component({
  selector: 'blog-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    response: { doc?: ContactModel, status?: number } | undefined;
    showAlert: boolean = false;
    status?: number;
    alertMessage?: string;
    clear: any;

    constructor(private contentService: ContactService) { }

    ngOnInit(): void {
    }

    onSubmit(form: NgForm) {
        this.contentService.createNewMessage(form.value).subscribe((res:{doc?: ContactModel, status?: number}) => {
            this.response = res;

            this.showAlert = true;
            this.status = res.status;
            if(this.status === 201) {
                this.alertMessage = AlertmessageEnum.contactUsSuccess;
            }
            else{
                this.alertMessage = AlertmessageEnum.contactUsError;
            }

            this.clear = setTimeout(() => {
                this.showAlert = false;
                clearTimeout(this.clear);
            }, 3000);
        });
        form.onReset();
    }

}
