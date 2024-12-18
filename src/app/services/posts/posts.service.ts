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

  public getPostById = async(id : number) : Promise<Post> => { //Appel à l'api ou json local qui récupère les données
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/'+id);
    return (await response.json()) ?? null;
  }

  public updatePost(post: Post): Promise<void> {
    console.log(JSON.stringify(post.id));
    console.log(JSON.stringify(post));
    return fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      method: 'PUT',
      body: JSON.stringify(post),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      if (!response.ok) {
        throw new Error('Failed to update post');
      }
    });
  }

  public deletePost(post: Post): Promise<void> {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      method: 'DELETE',
    }).then((response) => {
      if (!response.ok) {
        throw new Error('Failed to update post');
      }
    });
  }

  public newPost = async(newTitle: String, newBody: String, newUserId: Number): Promise<Post> => {
    console.log("newTitle : "+newTitle+"; newBody : "+newBody+"; newUserId :" +newUserId);
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title: newTitle,
        body: newBody,
        userId: newUserId,
    }),
      headers: { 'Content-Type': 'application/json' }
    });

    return (await response.json()) ?? null;
  }
}
