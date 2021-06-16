import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../core/services/users.service';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  users=[]
  constructor(
    private productsService:ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchUsers()
  }

  fetchUsers(){
    this.productsService.getAllUsers().subscribe(users=>{
      console.log(users)
      this.users=users
    })
  }



}
