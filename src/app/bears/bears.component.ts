import { Component, OnInit } from '@angular/core';
import Bear from '../bear';
import { BEARS } from '../mock-bears'

@Component({
  selector: 'app-bears',
  templateUrl: './bears.component.html',
  styleUrls: ['./bears.component.css']
})
export class BearsComponent implements OnInit {
  bears = BEARS;
  bear: Bear = {
    id: 1,
    name: "Golden Bear"
  };

  constructor() { }

  ngOnInit() {
  }

}
