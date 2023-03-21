import {Component, enableProdMode, OnInit} from '@angular/core';
import {AuthService} from "./core/services/auth.service";
import {UserService} from "./core/services/user.service";
enableProdMode();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Blog';

  constructor(private authService: AuthService, private userService: UserService) {
  }

  ngOnInit() {
      this.authService.verify().subscribe({
          next: ((value: any) => {
              this.userService.userinfo = value;
              console.log(this.userService.userinfo);
          }),
          error: ((err: any) => {
              console.log(err);
          })
      })
  }

}
