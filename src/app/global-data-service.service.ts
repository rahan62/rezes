import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataServiceService {
    public data: any;
    public userType: any;
  constructor() { }
}
