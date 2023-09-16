import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  pizzas : any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('http://localhost:5257/api/Pizza/GetPizzas').subscribe({
      next: response => {
        this.pizzas = response;
        console.log(response);
      }, 
      error: error => console.log(error),
      complete : () => {
        console.log('Request has completed');
      }
    })
    
  }

  

}
