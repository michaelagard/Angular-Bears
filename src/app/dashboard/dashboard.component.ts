import { Component, OnInit } from '@angular/core';
import { Bear } from '../bear';
import { BearService } from '../bear.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  bears: Bear[] = [];

  constructor(private bearService: BearService) { }

  ngOnInit() {
    this.getBears();
  }

  getBears(): void {
    this.bearService.getBears()
      .subscribe(bears => this.bears = bears.slice(1, 5));
  }
}