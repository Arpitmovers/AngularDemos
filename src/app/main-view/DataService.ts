import {Injectable} from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
	constructor(private http: Http) {

	}
	curren:any[];
	getApp(): string {
		return "Hello world";
	}

	getData(){
		return this.http.get('https://api.coinmarketcap.com/v1/ticker/')
			   .map(res => {
			    	return res.json()
			    })
			   .catch((error:Response) => {
					return Observable.throw('went WRONG!!');
			   })
		
	}

} 