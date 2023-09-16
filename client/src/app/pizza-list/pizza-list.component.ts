import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {

  pizzas : any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPizzas();

  }

  getPizzas(){
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
    return;
  }

  deletePizza(id : number){
    let httpParams = new HttpParams().set('id', id);
    httpParams.set('id', id);
    let options = { params: httpParams };
    console.log(id);
    console.log(options);

    this.http.delete('http://localhost:5257/api/Pizza/DeletePizza/', options).subscribe({
      next: response => {
        this.pizzas = response;
        console.log(response);
      }, 
      error: error => console.log(error),
      complete : () => {
        console.log('Request has completed');
        this.getPizzas();
        
      }
    })


    

  }





}

class Pizza {
  id?: number;
  name?: string = "";
  size: string | undefined;
  isGlutenFree?: boolean;
  price?: number;

  // constructor(id : number, name : string, size : number, isGlutenFree: boolean, price: number){
  //   this.id = id;
  //   this.name = name;
  //   this.size = size;
  //   this.isGlutenFree = isGlutenFree;
  //   this.price = price;
  // }


}



