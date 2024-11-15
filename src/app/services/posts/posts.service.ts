import { Injectable } from '@angular/core';
import { Post } from '../../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  //private listPosts : Post[] = [];

  constructor() { //constructeur d'un Post
    //this.listPosts = [{id: 1, title: "post 1"}, {id: 2, title: "post 1"}];
  }

  public getPost = async() : Promise<Post[]> => { //Appel à l'api ou json local qui récupère les données
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return (await response.json()) ?? [];
  }
}
