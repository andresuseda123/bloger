import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 
@Component({
  selector: 'app-visualizacion',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './visualizacion.component.html',
  styleUrl: './visualizacion.component.css'
})
export class VisualizacionComponent {
  nombre = 'Visualización';  
  historia = 'SkanHawk se especializa en la provisión de cámaras intrínsecamente seguras para la inspección en pozos y entornos peligrosos, ofreciendo una solución robusta y confiable para la visualización remota. Nuestras cámaras están diseñadas para operar en áreas clasificadas, garantizando la seguridad en ambientes explosivos o de alta peligrosidad, como los pozos petroleros y de gas, con una calidad de imagen en alta resolución y opcion de descarga de videos.';
  img = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjtG4UiDeFImw8Tq-tYVvSkGHsdLChVEt5y1tkC1NUuhlh-53hiGrXpDyGpNcxX-eg8WIVIyRbpQWpQpvqiipnfDsgl0DRxJBhBzBYgYAbde5GVbuFSkuQ731YOYVL7g9CpU0C90Eyghlw3fIJa0TLU2O0yiI6RZVFlNadoed3NUChCw-R3-yDndZvGV8Y/s798/1.png';
}
