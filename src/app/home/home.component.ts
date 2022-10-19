import { Component, OnInit } from '@angular/core';
import { EditorPickedService } from '../services/editor-picked.service';
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
  editorPickedData: any = [];

  constructor(
    private recentArticles: RecentArticlesService,
    private latestArticles: LatestArticlesService,
    private editorPicked: EditorPickedService) { }

  ngOnInit(): void {
    this.latestArticlesData = this.latestArticles.data;
    this.recentArticlesData = this.recentArticles.data;
    this.editorPickedData = this.editorPicked.data;
  }

}
