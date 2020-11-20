import { Injectable , Injector} from '@angular/core';
//import { Http, Headers, RequestOptions} from '@angular/http';
//import { Http, HTTP_PROVIDERS, Headers, RequestOptions, Request, RequestMethod} from '@angular/http';
//import { HttpClient, HttpHeaders, OptionsType} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class PostProvider {
    server: string = "http://localhost/Embebidos2020/server_api/";
 

    constructor(public http : HttpClient){

    }

    postData(body, file){
        let type = "application/json; charset=UTF-8";
        let headers = new HttpHeaders({ 'Content-Type': type});
        //let options = new OptionsType({headers: headers });
        //let options = new HttpRequestOptions({headers: headers });
        //let options = {headers: new HttpHeaders({'Content-Type':  'application/json'})};
        /*
        const HttpOptions = {
            headers: new HttpHeaders({
            'Content-Type':  'application/json'
            })
        };
        let options = this.http.get('PRODUCT_URL', HttpOptions)
        */
       const options = {
            headers: new HttpHeaders().append('key', 'value'),
            params: new HttpParams().append('key', 'value')
        }
        //return this.http.post(this.server + file, JSON.stringify(body), options)
        //.map(res => res.json());
        return this.http.post(this.server + file, JSON.stringify(body), options)
        //.map(res => res.json());
        .map(res => res );
    }
}

