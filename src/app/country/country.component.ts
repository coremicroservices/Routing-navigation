import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  countryDetail = {};
  constructor(private commonService: CommonService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const code = this.activatedRoute.snapshot.params['code'];
    this.countryDetail = this.commonService.getCountryByCode(code);
  }

}
