import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 
@Component({
  selector: 'app-sensores',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sensores.component.html',
  styleUrl: './sensores.component.css'
})
export class SensoresComponent {
  nombre = 'Sensores';  
  historia = 'En SkanHawk, nos dedicamos a optimizar las operaciones de perforación en la industria de petróleo y gas. A través de nuestras soluciones tecnológicas, ofrecemos monitoreo en tiempo real y análisis de datos para mejorar la eficiencia y seguridad en cada proceso. Nuestro objetivo es apoyar a los operadores en la toma de decisiones precisas y oportunas, maximizando el rendimiento y minimizando riesgos en las plataformas de perforación.';
  img = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5cKGrq92taErO5KOviS_YvmMGzNwe_xT_glemaAgu7h2ILXbyv714-d8yTxRU1n9GX86NVC7dWr247IP3-i9FvszwkJzxXP0yzV96fJ6IOvpfoHayzQIa6fnQlW_7bzpkwcQgACp7hUOh6hIyGo33JF5zuI1S3EccORFEHpClVkEqbkO8TEeIlIld-qU/s1148/2.png';
}
