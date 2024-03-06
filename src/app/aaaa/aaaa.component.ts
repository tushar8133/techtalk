import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aaaa',
  templateUrl: './aaaa.component.html',
  styleUrls: ['./aaaa.component.css'],
})
export class AAAAComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  continue() {
    this.router.navigateByUrl('BBBB');
  }
}
