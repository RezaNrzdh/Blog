import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CommentService {

    constructor(private http: HttpClient) { }

    createComment = (body: any) => {
        return this.http.patch("http://localhost:3001/api/v1/comment", body);
    }

    getComments = () => {
        
    }
}