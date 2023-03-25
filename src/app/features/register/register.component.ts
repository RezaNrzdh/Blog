import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from "../../core/services/auth.service";
import {UserService} from "../../core/services/user.service";
import {Router} from "@angular/router";

@Component({
    selector: 'blog-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    constructor(
        private authService: AuthService,
        private router: Router,
        private userService: UserService) { }

    ngOnInit(): void {}

    onSubmit = (form: NgForm) => {
        this.authService.SignUp(form.value).subscribe({
            next: (value: any) => {
                if(value.status == 201){
                    this.userService.userinfo.next(value.doc);
                    this.router.navigate(["/"]);
                }
            },
            error: (err: any) => {
                console.log(err);
            }
        })
        form.onReset();
    }

}
