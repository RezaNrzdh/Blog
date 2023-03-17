import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from "../../core/services/auth.service";

@Component({
  selector: 'blog-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {}

  onSubmit = (form: NgForm) => {
    this.authService.SignUp(form.value).subscribe({
      next: (value: any) => {
        console.log(value)
      },
      error: (err: any) => {
        console.log(err);
      }
    })
    form.onReset();
  }

}
