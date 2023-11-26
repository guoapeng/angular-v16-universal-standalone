import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { Observable, map } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    MarkdownModule,
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export default class AboutComponent {
  
  post$: Observable<any> | undefined
  
  constructor(private routeInfo: ActivatedRoute,
    private http: HttpClient,
    ){
    
  }
  
  ngOnInit(): void {
    this.routeInfo.paramMap.subscribe((params: ParamMap) => {
        this.post$ = this.http
            .get(
                'https://raw.githubusercontent.com/guoapeng/angular-v16-universal-standalone/main/README.md', { responseType: 'text'}
            )
            
    })
}

}
