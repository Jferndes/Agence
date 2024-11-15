import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../../interfaces/post';
import { PostsService } from '../../services/posts/posts.service';

@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.css'
})
export class ListPostsComponent {
  public listPosts : Post[] = [];
  public postsService = inject(PostsService);

  constructor() {
    this.postsService.getPost().then((posts: Post[]) => {
      this.listPosts = posts
    });
  }
}
