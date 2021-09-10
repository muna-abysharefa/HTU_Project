import { identifierModuleUrl } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Center } from 'center';
import centers from 'mockupcenters';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchText: string = '';
  centers: Center[] = [...centers];
  constructor() {
    
    }
     ngOnInit(): void {
  }
    searchCenters(){
        if(this.searchText!=""){
            this.centers=this.centers.filter(result=> {
                  return result.location.toUpperCase().match(this.searchText.toUpperCase());
        }); 
      }
        else if(this.searchText =="")
        {
          this.searchText;
        }
        
    }
}



