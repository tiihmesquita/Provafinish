import { Todo } from '../dadointerface';
import { DadosService } from './../dados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private DadosService:DadosService) {}

  todo: Todo[] = [];

  //toDisplay = false;
  ngOnInit(): void {
    this.showUsers();
  }

  showUsers(){
    //this.toDisplay = !this.toDisplay;
    this.DadosService.getUser().subscribe(dados => this.todo = dados)
  }

}
