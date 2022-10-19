import { Component, OnInit } from '@angular/core';
import { LatestArticlesService } from '../services/latest-articles-service';

import { RecentArticlesService } from '../services/recent-articles.service';

@Component({
  selector: 'blog-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  latestArticlesData: any = {};
  recentArticlesData: any = [];

  constructor(private recentArticles: RecentArticlesService, private latestArticles: LatestArticlesService) { }

  ngOnInit(): void {
    this.latestArticlesData = this.latestArticles.data;
    this.recentArticlesData = this.recentArticles.getArticles();
  }

}
