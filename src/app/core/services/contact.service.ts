import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {environment} from "../../../environments/environment";

@Injectable()
export class ContactService {

    constructor(private http: HttpClient){}

    createNewMessage = (body: any) => {
        return this.http.post(environment.server + 'api/v1/contact', body);
    }
}