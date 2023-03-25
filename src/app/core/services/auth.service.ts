import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {
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
}