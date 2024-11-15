import { Injectable } from '@angular/core';
import { Todo } from '../../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  //private listTodos : Todo[] = [];

  constructor() { //constructeur d'un Post
    //this.listTodos = [{id: 1, title: "todo 1"}, {id: 2, title: "todo 1"}];
  }

  public getTodos = async() : Promise<Todo[]> => { //Appel à l'api ou json local qui récupère les données
    let response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return (await response.json()) ?? [];
  }
}
