import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class CommentService {

    constructor(private http: HttpClient) { }

    createComment = (body: any) => {
        return this.http.patch(environment.server + "api/v1/comment", body);
    }
}