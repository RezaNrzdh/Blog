import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SubscribeModel} from "../models/subscribe.model";

@Injectable()
export class SubscribeService {

    constructor(private http: HttpClient) { }

    createSubscribe = (body: any): Observable<SubscribeModel> => {
        return this.http.post<SubscribeModel>("http://localhost:3001/api/v1/subscribe", {email: body});
    }
}