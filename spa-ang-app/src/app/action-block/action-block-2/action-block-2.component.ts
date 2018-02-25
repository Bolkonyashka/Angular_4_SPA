import { Component, OnInit } from '@angular/core';

import {Payment} from '../../payment';

@Component({
  selector: 'app-action-block-2',
  templateUrl: './action-block-2.component.html',
  styleUrls: ['./action-block-2.component.css']
})
export class ActionBlock2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  payment: Payment = new Payment();
  ndsVal = "Без НДС"

  makeFile(payment: Payment) {
    var req = new XMLHttpRequest()
    req.onreadystatechange = function() { 
      var a;
      if (req.readyState === 4 && req.status === 200) {
        a = document.createElement('a');
        a.href = window.URL.createObjectURL(req.response);
        a.download  = "lala.pdf";
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click ();
        }
    }
    req.open ('POST', '../../../assets/download.php', true); 
    req.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8");
    req.responseType = 'blob';
    req.send("id=2&gg=3&inn=" + payment.inn + "&bik=" + payment.bik + "&accNum=" + payment.accNum + "&nds=" + payment.nds + "&sum=" + payment.sum);
  }

  chNDS(payment: Payment, val) {
    this.ndsVal = val;
    payment.nds = val;
  }
}
