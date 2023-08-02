import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class SearchService {
    baseUrl: string = environment.apiURL;

    constructor(private http: HttpClient) {
    }

    searchRecipeAPI(term) {
        return this.http.get(`${this.baseUrl}&q=${term}`);
    }
}
