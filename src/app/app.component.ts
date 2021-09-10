import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  title = 'vaccine-locater';

  ngOnInt(){
    interface JQuery {
    address(callback?: () => void): JQuery;
}

// For methods on $
interface JQueryStatic {
    address: JQueryAddressStatic;
}

interface JQueryAddressStatic {
    (): JQuery;
    parameter(name: string): string;
    parameter(name: string, value: string, append?: boolean): JQuery;
}
  }
  
}
