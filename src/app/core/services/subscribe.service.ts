import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SubscribeModel} from "../models/subscribe.model";
import {environment} from "../../../environments/environment";

@Injectable()
export class SubscribeService {

    constructor(private http: HttpClient) { }

    createSubscribe = (body: any): Observable<SubscribeModel> => {
        return this.http.post<SubscribeModel>(environment.server + "api/v1/subscribe", {email: body});
    }
}