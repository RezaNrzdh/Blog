import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable()
export class ReplyService {
    constructor(private http: HttpClient) {}

    createReply = (body: any): Observable<Object> => {
        console.log(body);
        return this.http.patch(environment.server + "api/v1/comment/reply", body);
    }
}