import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
})
export class BlogPostComponent implements OnInit {
  postContent: string = ''; 

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const postId = this.activatedRoute.snapshot.paramMap.get('postId'); 
    if (postId) {
      const url = `assets/posts/${postId}/post.md`; 
      this.http.get(url, { responseType: 'text' }).subscribe({
        next: (data: string) => {
          this.postContent = data;
        },
        error: (error) => {
          console.error('Error al cargar el post:', error);
          this.postContent = 'Error al cargar el contenido del post.';
        }
      });
    }
  }
}
