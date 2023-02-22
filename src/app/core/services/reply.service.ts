import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class ReplyService {
    constructor(private http: HttpClient) {}

    createReply = (body: any): Observable<Object> => {
        return this.http.post("", body);
    }
}