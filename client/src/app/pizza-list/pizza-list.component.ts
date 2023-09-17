import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {

  pizzas : any;
  showSpinner : boolean = false;
  showAlert : boolean = false;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.showSpinner = true;
    // Dopo 2 secondi, nascondi il spinner
    setTimeout(() => {
        this.showSpinner = false;
        // this.goPizzasList();
        this.getPizzas();
    }, 2000);


  }

  getPizzas(){
    this.http.get('http://localhost:5257/api/Pizza/GetPizzas').subscribe({
      next: response => {
        this.pizzas = response;
        console.log(response);
      }, 
      error: error => console.log(error),
      complete : () => {
        // this.showSpinner = true;
        // // Dopo 2 secondi, nascondi il spinner
        // setTimeout(() => {
        //     this.showSpinner = false;
        //     // this.goPizzasList();
        // }, 2000);

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
        this.showSpinner = true;

        // Dopo 2 secondi, nascondi il spinner
        setTimeout(() => {
            this.showSpinner = false;
            // this.goPizzasList();
        }, 2000);

        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false;
          console.log('dentro alert');
          
          this.getPizzas();
        }, 3000);
        
      }
    })


    

  }





}





