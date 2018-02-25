import { Component, OnInit } from '@angular/core';

import {Payment} from '../../payment';

@Component({
  selector: 'app-action-block-3',
  templateUrl: './action-block-3.component.html',
  styleUrls: ['./action-block-3.component.css']
})
export class ActionBlock3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  payment: Payment = new Payment();
  ndsVal = "Без НДС"

  submit(payment: Payment) {
    var req = new XMLHttpRequest()
    var statusElem = document.getElementById("teststatus")
    req.onreadystatechange = function() { 
      if (req.readyState === 4 && req.status === 200) {
        if (req.status == 200) {
          alert("Платёж запрошен!");
        }
      }
    }
    req.open ('POST', '../../../assets/reqPayment.php', true); 
    req.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8");
    req.send("inn=" + payment.inn + "&bik=" + payment.bik + "&accNum=" + payment.accNum + "&nds=" + payment.nds + "&sum=" + payment.sum + "&phone=" + payment.phone +"&mail=" + payment.mail);
  }

  chNDS(payment: Payment, val) {
    this.ndsVal = val;
    payment.nds = val;
  }

}
