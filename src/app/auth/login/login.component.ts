import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'blog-login',
  templateUrl: './login.component.html',
  host: {'class': 'PageContainer'},
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit = (form: NgForm) => {
    console.log(form.value);
    form.onReset();
  }

}
