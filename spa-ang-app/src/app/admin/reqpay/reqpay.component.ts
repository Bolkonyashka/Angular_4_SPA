import { Component, OnInit } from '@angular/core';
import { AuthenticationService, AlertService } from '../../_services/index';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reqpay',
  templateUrl: './reqpay.component.html',
  styleUrls: ['./reqpay.component.css']
})
export class ReqpayComponent implements OnInit {

  pays: Object;
  done: boolean = false;
  chSafeID: string = "0";
  chSafeStat: string = "0";
  sortField: string = "id";
  sortOrder: string = "";
  filterField: string = "nope";
  filterVal: string = "";
  loading = false;

  constructor(private autser: AuthenticationService, private alser: AlertService, private router: Router) { }

  ngOnInit() {
  }

  submit(sf: string, so: string, ff: string, fv: string) {
    this.loading = true;
    var user = JSON.parse(sessionStorage.getItem('currentUser'));
    var req = new XMLHttpRequest()
    var p = this.pays;
    var f = (res: Object) => {this.pays = res; this.done = true; this.loading = false;}
    var rf = () => {this.router.navigate(['/login']); this.alser.error('Безопасность сеанса не прошла проверку. Пожалуйста, пройдите авторизацию'); this.loading = false;}
    req.onreadystatechange = function() { 
      if (req.readyState === 4 && req.status === 200) {
        var rd = JSON.parse(req.responseText);
        if (rd.secstat === "1") {
          p = rd.records;
          f(p);
        } else {
          rf();
        }
      }
    }
    req.open ('GET', '../../../assets/getPay2.php?sortfield=' + sf + '&sortorder=' + so + '&filterfield=' + ff + '&filterval=' + fv, true); 
    req.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8");
    req.setRequestHeader("Authorization","Bearer " + user.token);//"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NSIsIm5hbWUiOiJKb2huIEdvbGQiLCJhZG1pbiI6dHJ1ZX0.LIHjWCBORSWMEibq-tnT8ue_deUqZx1K0XxCOXZRrBI");
    req.send();
  }

  chSafe(csid: string, csst: string, sf: string, so: string, ff: string, fv: string) {
    this.loading = true;
    var user = JSON.parse(sessionStorage.getItem('currentUser'));
    var req = new XMLHttpRequest()
    var f = () => {this.submit(sf, so, ff, fv);}
    var rf = () => {this.router.navigate(['/login']); this.alser.error('Безопасность сеанса не прошла проверку. Пожалуйста, пройдите авторизацию'); this.loading = false;}
    req.onreadystatechange = function() { 
      if (req.readyState === 4 && req.status === 200) {
        var rd = JSON.parse(req.responseText);
        if (rd.secstat === "1") {
          f();
          alert("Безопасность изменена!");
        } else {
          rf();
        }
      }
    }
    req.open ('POST', '../../../assets/chSafe2.php', true); 
    req.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8");
    req.setRequestHeader("Authorization","Bearer " + user.token);
    req.send("id="+ csid + "&st=" + csst);
  }

}
