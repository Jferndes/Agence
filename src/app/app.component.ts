import { Component } from '@angular/core';
import { RouterOutlet, RouterModule} from '@angular/router';
import { ListTodosComponent } from './components/list-todos/list-todos.component'
import { ListPostsComponent } from './components/list-posts/list-posts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, ListTodosComponent, ListPostsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private title = 'Agence';

  public getTitle= () => {
    return this.title;
  }
}
