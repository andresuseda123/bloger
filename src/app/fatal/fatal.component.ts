import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 
@Component({
  selector: 'app-fatal',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './fatal.component.html',
  styleUrl: './fatal.component.css'
})
export class FatalComponent {
  error = 'Error Pagina No Encontrada';  
  img = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQr7yO4QTVDfsPORazpoUi3AdD71iDJMSTPoUbQ-cLYdGVFvMF9mwS8-60i0BhXkKO8fhT35R0ngjYdo0bNlOLFD97YMk4qCyU8BT1hte10TSxKqIlNK_6PMXIhs8qu9_-YjPTrjC2YY0T__LJnvy8KlEsXY1P6yaPBYxMRMYjHPjI2p3Z0ZNMtXa67oI/s1600/fatal.png';
}
