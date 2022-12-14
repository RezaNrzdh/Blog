import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from 'src/app/core/services/contact.service';
import { ContactModel } from 'src/app/core/models/contact.model';

@Component({
  selector: 'blog-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    response: { doc?: ContactModel, status?: number } | undefined;
    showAlert: boolean = false;

    constructor(private contentService: ContactService) { }

    ngOnInit(): void {
    }

    onSubmit(form: NgForm) {
        this.contentService.createNewMessage(form.value).subscribe((res:{doc?: ContactModel, status?: number}) => {
            this.response = res;
            console.log(res.status);
            this.showAlert = true;
        });
        form.onReset();
    }

}
