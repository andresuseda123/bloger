import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { VisualizacionComponent } from './visualizacion/visualizacion.component';
import { SkanhawkComponent } from './skanhawk/skanhawk.component';
import { SensoresComponent } from './sensores/sensores.component';
import { FatalComponent } from './fatal/fatal.component';
import { FooterComponent } from './footer/footer.component';
import { PrePostComponent } from './pre-post/pre-post.component';
import { PrePost1Component } from './pre-post1/pre-post1.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
export const routes: Routes = [
    {path:'navbar',component: NavbarComponent},
    {path:'visualizacion',component: VisualizacionComponent},
    {path:'sensores',component: SensoresComponent},
    {path:'skanhawk',component: SkanhawkComponent},
    {path:'fatal', component: FatalComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'prepost', component: PrePostComponent},
    {path: 'prepost1', component: PrePost1Component},
    { path: 'post/:postId', component: BlogPostComponent },
    {path:'', redirectTo: 'skanhawk', pathMatch: 'full'},  
    {path:'**', redirectTo: 'fatal', pathMatch: 'full'}
];