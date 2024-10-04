import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component'; 
import { RouterModule } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { SkanhawkComponent } from "./skanhawk/skanhawk.component";
import { SensoresComponent } from "./sensores/sensores.component";
import { VisualizacionComponent } from "./visualizacion/visualizacion.component";
import { PrePostComponent } from './pre-post/pre-post.component';
import { PrePost1Component } from './pre-post1/pre-post1.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, RouterModule, FooterComponent, SkanhawkComponent, SensoresComponent, VisualizacionComponent, PrePostComponent, PrePost1Component], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'total';
}
