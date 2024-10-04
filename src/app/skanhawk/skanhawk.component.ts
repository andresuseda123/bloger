import { Component } from '@angular/core';
import { PrePostComponent } from '../pre-post/pre-post.component';
import { PrePost1Component } from "../pre-post1/pre-post1.component";

@Component({
  selector: 'app-skanhawk',
  standalone: true,
  imports: [PrePostComponent, PrePost1Component],
  templateUrl: './skanhawk.component.html',
  styleUrl: './skanhawk.component.css'
})
export class SkanhawkComponent {

}
