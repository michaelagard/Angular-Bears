import { Component, OnInit, Input } from '@angular/core';
import { Bear } from '../bear'

@Component({
  selector: 'app-bear-detail',
  templateUrl: './bear-detail.component.html',
  styleUrls: ['./bear-detail.component.css']
})

export class BearDetailComponent implements OnInit {
  @Input() bear: Bear;

  constructor() { }

  ngOnInit() {
  }

}
