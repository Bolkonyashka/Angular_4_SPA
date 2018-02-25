import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Payment} from './payment';
  
@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
      
    //http://localhost:60489/Home/PostUser  ASP.NET MVC 5
    //http://localhost:8080/angular/setUser.php     PHP
    // http://localhost:60820/api/values        ASP NET Wep API 2
    postData(pm: Payment){
         
        const body = {cardNum: pm.cardNum, date: pm.date, cvc: pm.cvc, sum: pm.sum, comm: pm.comm, mail: pm.mail, inn: pm.inn, bik: pm.inn, accNum: pm.accNum, nds: pm.nds, phone: pm.phone};
        return this.http.post('../assets/setPayment.php', body); 
    }
}