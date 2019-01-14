import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Bear } from './bear';
import { BEARS } from './mock-bears';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class BearService {

  constructor(private messageService: MessageService) { }

  getBears(): Observable<Bear[]> {
    this.messageService.add('BearService: fetched bears')
    return of(BEARS);
  }
}
