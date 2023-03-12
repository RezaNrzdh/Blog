import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from "../../core/services/auth.service";

@Component({
  selector: 'blog-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit = (form: NgForm) => {
    this.authService.Login(form.value).subscribe({
        next: (value: any) => {
            console.log(value);
        }
    });
    form.onReset();
  }

}
