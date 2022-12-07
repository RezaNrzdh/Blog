import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from 'src/app/core/services/contact.service';

@Component({
  selector: 'blog-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private contentService: ContactService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.contentService.createNewMessage(form.value).subscribe(res => {
      console.log(res);
    });
    form.onReset();
  }

}
