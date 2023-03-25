import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {UserService} from "./user.service";

@Injectable()
export class AuthService {
    constructor(private http: HttpClient, private userService: UserService) {
    }

    Login = (body: any) => {
        return this.http.post(
            environment.server + "api/v1/auth/login", body);
    }

    SignUp = (body: any) => {
        return this.http.post(
            environment.server + "api/v1/auth/signup", body);
    }

    verify = () => {
        return this.http.get(environment.server + "api/v1/auth/verify");
    }

    logout = () => {
        this.http.get( environment.server + "api/v1/auth/logout").subscribe({
            next: ((value: any) => {
                if (value) this.userService.userinfo.next({});
            }),
            error: ((err: any) => { console.log(err) })
        })
    }
}