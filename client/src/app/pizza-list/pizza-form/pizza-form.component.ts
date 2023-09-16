import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.scss']
})
export class PizzaFormComponent implements OnInit {
  pizza : Pizza = new Pizza();
  selectedSize : string | undefined;
  isGlutenFree : boolean = false;
  pizzas: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSelectedSize() {
    console.log('Valore selezionato:', this.selectedSize);	
    this.pizza.size = this.selectedSize;
  }

  onSelectedGluten() {
    console.log('Valore selezionato:', this.isGlutenFree);
    this.pizza.isGlutenFree = this.isGlutenFree;
  }

  addPizza(){
    const pizzaCreated = new Pizza();
    pizzaCreated.name = this.pizza.name
    pizzaCreated.size = this.pizza.size
    pizzaCreated.price = this.pizza.price
    pizzaCreated.isGlutenFree = this.pizza.isGlutenFree
    console.log(pizzaCreated);

    this.http.post('http://localhost:5257/api/Pizza/AddPizza', pizzaCreated).subscribe({
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
