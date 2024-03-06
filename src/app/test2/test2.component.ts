import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { AAAAComponent } from '../aaaa/aaaa.component';
import { BBBBComponent } from '../bbbb/bbbb.component';
import { CCCCComponent } from '../cccc/cccc.component';
import { DDDDComponent } from '../dddd/dddd.component';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {

  
  @ViewChild('holder', {read:ViewContainerRef}) vcr: ViewContainerRef;

  counter = 0;

  constructor() {}
  
  ngOnInit(): void {
  }
  
  ngAfterViewInit() {
    this.continue();
  }

  addMore() {
    this.vcr.createComponent(AAAAComponent);
  }

  removeAll() {
    this.vcr.clear();
  }

  continue() {
    this.vcr.clear();
    ++this.counter;
    switch(this.counter) {
      case 1: this.vcr.createComponent(AAAAComponent); break;
      case 2: this.vcr.createComponent(BBBBComponent); break;
      case 3: this.vcr.createComponent(CCCCComponent); break;
      case 4: this.vcr.createComponent(DDDDComponent); break;
      default: this.counter = 0;
    }

  }

}
