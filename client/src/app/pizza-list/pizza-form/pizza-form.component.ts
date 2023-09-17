import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pizza } from 'src/app/Models/Pizza';
import { Router } from '@angular/router';



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

  constructor(private http: HttpClient, private router : Router) { }

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
        this.goPizzasList();
      }
    })
  } 

  goPizzasList(){
    this.router.navigate(['/', 'pizza-list'])

  }



}

