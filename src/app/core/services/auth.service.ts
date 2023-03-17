import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {
    }

    Login = (body: any) => {
        return this.http.post(
            "http://localhost:3001/api/v1/auth/login", body,
            { withCredentials: true });
    }

    SignUp = (body: any) => {
        return this.http.post(
            "http://localhost:3001/api/v1/auth/signup", body,
            { withCredentials: true });
    }
}