import { Injectable } from '@angular/core';
import { Bear } from './bear';
import { BEARS } from './mock-bears';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BearService {

  constructor() { }
  getBears(): Observable<Bear[]> {
    return of(BEARS);
  }
}
