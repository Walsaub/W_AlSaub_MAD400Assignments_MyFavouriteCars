import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { ContentListComponent } from './content-list/content-list.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/content",
    pathMatch: "full"
  },
  {
    path: "content",
    component: ContentListComponent
  },
  {
    path: "content/:id",
    component: ContentDetailComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
