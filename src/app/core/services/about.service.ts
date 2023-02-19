import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import { AboutModel } from "../models/about.model";

@Injectable()
export class AboutService {

    constructor(private http: HttpClient) { }

    getTeamMember = (): Observable<AboutModel> => {
        return this.http.get("http://localhost:3001/api/v1/about/");
    }
}
