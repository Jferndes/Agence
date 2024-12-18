import { Routes } from '@angular/router';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { ListTodosComponent } from './components/list-todos/list-todos.component';
import { DetailPostsComponent } from './components/detail-posts/detail-posts.component';

export const routes: Routes = [
    {
        path: '',
        component: ListPostsComponent,
        title: 'List Post',
    },{
        path: 'todos',
        component: ListTodosComponent,
        title: 'List Todos',
    },{
        path: 'posts/:id/detail',
        component: DetailPostsComponent,
        title: 'Detail Post',
    }
    
];
