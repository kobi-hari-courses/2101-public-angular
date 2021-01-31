import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { PageAComponent } from "./components/page-a/page-a.component";

const routes: Routes = [
    { path: '', redirectTo: 'a', pathMatch: 'full' },
    { path:'a', component: PageAComponent}, 
    { path:'b', component: PageAComponent}, 
    { path:'c', component: PageAComponent}, 
    { path: '**', component: NotFoundComponent}
  ]
  
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ], 
    exports: [
        RouterModule
    ]
    
})
export class AppRoutingModule {    
}