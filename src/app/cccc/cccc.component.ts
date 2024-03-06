import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cccc',
  templateUrl: './cccc.component.html',
  styleUrls: ['./cccc.component.css'],
})
export class CCCCComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  continue() {
    this.router.navigateByUrl('AAAA/BBBB/CCCC/DDDD');
  }
}
