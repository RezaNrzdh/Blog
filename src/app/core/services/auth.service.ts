import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {
    }

    Login = (body: any):Observable<any> => {
        return this.http.post("https://localhost:3001/api/v1/auth/login",body);
    }

    SignUp = (body: any):Observable<any> => {
        return this.http.post("https://localhost:3001/api/v1/auth/signup", body);
    }
}