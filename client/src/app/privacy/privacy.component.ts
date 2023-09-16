import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

  title : string = "";

  constructor() { }

  ngOnInit(): void {
    this.title = "Privacy Policy"
  }

}
