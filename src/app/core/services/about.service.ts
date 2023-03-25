import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import { AboutModel } from "../models/about.model";
import {environment} from "../../../environments/environment";

@Injectable()
export class AboutService {

    constructor(private http: HttpClient) { }

    getTeamMember = (): Observable<AboutModel> => {
        return this.http.get(environment.server + "api/v1/about/");
    }
}
