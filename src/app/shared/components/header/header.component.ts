import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../../core/services/user.service";
import {Subscription} from "rxjs";
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'blog-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

    UserInfo: any = null;
    isLoggedIn: boolean = false;
    private sub!: Subscription;

    constructor(private userService: UserService, private authService: AuthService) { }

    ngOnInit(): void {
        this.sub = this.userService.userinfo.subscribe({
            next: ((value: any) => {
                if(value.uid) {
                    this.UserInfo = value;
                    this.isLoggedIn = true;
                }
                else {
                    this.UserInfo = null;
                    this.isLoggedIn = false;
                }
            }),
            error: ((err: any) => { console.log(err) })
        })
    }

    Logout = () => {
        this.authService.logout();
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
