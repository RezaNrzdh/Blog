import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from "../../core/services/auth.service";
import {UserService} from "../../core/services/user.service";
import {Router} from "@angular/router";


@Component({
  selector: 'blog-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(
        private authService: AuthService,
        private router: Router,
        private userService: UserService) { }

    ngOnInit(): void {}

    onSubmit = (form: NgForm) => {
        this.authService.Login(form.value).subscribe({
            next: (value: any) => {
                if(value) {
                    this.userService.userinfo.next(value.doc);
                    this.router.navigate(["/"]);
                }
            }
        });
        form.onReset();
    }
}
