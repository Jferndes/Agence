import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Post } from '../../interfaces/post';
import { PostsService } from '../../services/posts/posts.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.css'
})
export class ListPostsComponent {
  public listPosts : Post[] = [];
  public nbPost = 0;
  public filteredListPosts: Post[] = [];
  public postsService = inject(PostsService);
  public newTitle: string = '';
  public newBody: string = '';
  public newUserId: number = 1;

  constructor() {
    this.postsService.getPost().then((posts: Post[]) => {
      this.listPosts = posts;
      this.filteredListPosts = this.listPosts;
      this.nbPost = this.listPosts.length
    });
  }
 
  filterResults(text: string) {
    if (!text) {
      this.filteredListPosts = this.listPosts;
      this.nbPost = this.listPosts.length;
    }else{
      this.filteredListPosts = this.listPosts.filter((post) =>
        post?.title.toLowerCase().includes(text.toLowerCase()),
      );
      this.nbPost = this.filteredListPosts.length;
    }
  }

  newPost(): void {
    this.postsService.newPost(this.newTitle, this.newBody, this.newUserId).then((newPost) => {
      this.closeModal(new Event('click'));
      this.listPosts.push(newPost);
      this.nbPost += 1;
    }).catch(() => {
      alert('Erreur à l\'appel du service');
    });
  }

  deletePost(deletePost: Post) : void {
      this.postsService.deletePost(deletePost).then(() => {
        alert('Post supprimé!');
        this.nbPost -= 1;
        this.filteredListPosts = this.filteredListPosts.filter(post => post.id !== deletePost.id);
      }).catch(() => {
        alert('Erreur à l\'appel du service');
      });
  }

  openModal(event: Event): void {
    event.preventDefault();
    const modal = document.getElementById('newModal') as HTMLDialogElement;
    modal?.showModal();
  }

  closeModal(event: Event): void {
    event.preventDefault();
    const modal = document.getElementById('newModal') as HTMLDialogElement;
    modal?.close();
  }
}
