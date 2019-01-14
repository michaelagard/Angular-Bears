import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Bear } from '../bear';
import { BearService } from '../bear.service';

@Component({
  selector: 'app-bear-detail',
  templateUrl: './bear-detail.component.html',
  styleUrls: ['./bear-detail.component.css']
})

export class BearDetailComponent implements OnInit {
  bear: Bear;

  constructor(
    private route: ActivatedRoute,
    private bearService: BearService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getBear();
  }
  getBear(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bearService.getBear(id).subscribe(bear => this.bear = bear);
  }

  goBack(): void {
    this.location.back();
  }
}
