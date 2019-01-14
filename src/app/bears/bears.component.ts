import { Component, OnInit } from '@angular/core';

import { Bear } from '../bear';
import { BearService } from '../bear.service'

@Component({
  selector: 'app-bears',
  templateUrl: './bears.component.html',
  styleUrls: ['./bears.component.css']
})
export class BearsComponent implements OnInit {
  bears: Bear[];

  constructor(private bearService: BearService) { }

  ngOnInit() {
    this.getBears();
  }

  // Observable.subscribe() returns an Observable<Bear[]>
  getBears(): void {
    this.bearService.getBears()
      .subscribe(bears => this.bears = bears);
  }
}
