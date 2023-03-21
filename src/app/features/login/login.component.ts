import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from "../../core/services/auth.service";
import {UserService} from "../../core/services/user.service";

@Component({
  selector: 'blog-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
      console.log(this.userService.userinfo);
  }

  onSubmit = (form: NgForm) => {
    this.authService.Login(form.value).subscribe({
        next: (value: any) => {
            this.userService.userinfo = value;
        }
    });
    form.onReset();
  }

}
