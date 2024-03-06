import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bbbb',
  templateUrl: './bbbb.component.html',
  styleUrls: ['./bbbb.component.css'],
})
export class BBBBComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  continue() {
    this.router.navigateByUrl('AAAA/BBBB/CCCC');
  }
}
