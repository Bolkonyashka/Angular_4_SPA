import { Component, OnInit } from '@angular/core';

import {Payment} from '../../payment';

import {HttpService} from '../../http.service';

@Component({
  selector: 'app-action-block-1',
  templateUrl: './action-block-1.component.html',
  styleUrls: ['./action-block-1.component.css'],
  providers: [HttpService]
})

export class ActionBlock1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  payment: Payment = new Payment();

  submit(payment: Payment) {
    var req = new XMLHttpRequest()
    var statusElem = document.getElementById("teststatus")
    req.onreadystatechange = function() { 
      if (req.readyState === 4 && req.status === 200) {
        if (req.status == 200) {
          alert("Платёж выполнен!");
        }
      }
    }
    req.open ('POST', '../../../assets/setPayment.php', true); 
    req.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8");
    req.send("cardNum=" + payment.cardNum + "&date=" + payment.date + "&cvc=" + payment.cvc + "&sum=" + payment.sum + "&comm=" + payment.comm + "&mail=" + payment.mail);
  }
}
