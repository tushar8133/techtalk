import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { Page1Component } from '../page1/page1.component';
import { Page2Component } from '../page2/page2.component';
import { Page3Component } from '../page3/page3.component';
import { Page4Component } from '../page4/page4.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {

  
  @ViewChild('holder', {read:ViewContainerRef}) vcr: ViewContainerRef;

  counter = 0;

  constructor(private router: Router) {}
  
  ngOnInit(): void {
  }
  
  ngAfterViewInit() {
    this.continue();
  }

  addMore() {
    this.vcr.createComponent(Page1Component);
  }

  removeAll() {
    this.vcr.clear();
  }

  continue() {
    this.vcr.clear();
    ++this.counter;
    switch(this.counter) {
      case 1: this.vcr.createComponent(Page1Component); break;
      case 2: this.vcr.createComponent(Page2Component); break;
      case 3: this.vcr.createComponent(Page3Component); break;
      case 4: this.vcr.createComponent(Page4Component); break;
      default: this.router.navigateByUrl('test1');
    }

  }

}
