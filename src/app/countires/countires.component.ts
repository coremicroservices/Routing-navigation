import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countires',
  templateUrl: './countires.component.html',
  styleUrls: ['./countires.component.scss']
})
export class CountiresComponent implements OnInit {

  countries = [];
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.countries =  this.commonService.getCountries();
  }

}
