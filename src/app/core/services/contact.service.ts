import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ContactService {

    constructor(private http: HttpClient){}

    createNewMessage = (body: any) => {
        return this.http.post('http://localhost:3001/api/v1/contact', body);
    }
}