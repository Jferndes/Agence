import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../interfaces/post';
import { PostsService } from '../../services/posts/posts.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-detail-posts',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './detail-posts.component.html',
  styleUrl: './detail-posts.component.css'
})
export class DetailPostsComponent {
  public route : ActivatedRoute = inject(ActivatedRoute);
  public postsService = inject(PostsService);
  public post: Post | undefined;
  // Variables pour le formulaire
  public updatedTitle: string = '';
  public updatedBody: string = '';

  constructor() {
    const postId = Number(this.route.snapshot.params['id']);
    this.postsService.getPostById(postId).then((post: Post) => {
      this.post = post;
      this.updatedTitle = post.title;
      this.updatedBody = post.body;
    });
  }

  openModal(event: Event): void {
    event.preventDefault();
    const modal = document.getElementById('updateModal') as HTMLDialogElement;
    modal?.showModal();
  }

  closeModal(event: Event): void {
    event.preventDefault();
    const modal = document.getElementById('updateModal') as HTMLDialogElement;
    modal?.close();
  }

  updatePost(): void {
    if (this.post) {
        this.post.title = this.updatedTitle;
        this.post.body = this.updatedBody;

        // Appel au service pour sauvegarder les modifications (exemple simplifié)
        this.postsService.updatePost(this.post).then(() => {
          this.closeModal(new Event('click'));
        }).catch(() => {
          alert('Erreur à l\'appel du service');
        });
    }
  }

  deletePost() : void {
    if (this.post) {
      this.postsService.deletePost(this.post).then(() => {
        alert('Post supprimé !');
      }).catch(() => {
        alert('Erreur à l\'appel du service');
      });
    }else {
      alert('Erreur de suppression');
    }
  }
}

