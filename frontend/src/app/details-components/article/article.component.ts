import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() name: string;
  @Input() date: string; // Format: from(month year) - to(month year)
  @Input() jobname: string;
  @Input() activitylist:string;

  constructor() { }

  ngOnInit(): void {
  }

}
