import { Routes } from '@angular/router';
import { ArticleComponent } from './article.component';
import { EditArticleComponent } from './edit-article.component';

export const ArticleRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'article',
      component: ArticleComponent
    },
    {
      path: 'edit-article/:id',
      component: EditArticleComponent
    }
    ]
  }
];
