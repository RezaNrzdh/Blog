import { Component, OnInit } from '@angular/core';

import { HomeService } from '../services/home.service';

interface RecentArticles {
  img: string;
  title: string;
  author: string;
  created: string
}

interface EditorPicked {
  img: string;
  title: string;
  created: string;
}

interface OtherLastetArticles {
  img: string;
  title: string;
  created: string;
}

interface LatestArticle {
  img: string;
  title: string;
  desc: string;
  authorImg: string;
  author: string;
  duration: string;
  created: string;
}

@Component({
  selector: 'blog-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  latestArticle: LatestArticle = { img: '', title: '', desc: '', authorImg: '', author: '', duration: '', created: '' };
  otherLatestArticles: Array<OtherLastetArticles> = [];
  editorPicked: Array<EditorPicked> = [];
  recentArticles: Array<RecentArticles> = [];

  constructor(private homeservice: HomeService) { }

  ngOnInit(): void {
    this.latestArticle = this.homeservice.getLatestArticle();
    this.otherLatestArticles = this.homeservice.getOtherLatestArticles();
    this.editorPicked = this.homeservice.getEditorPicked();
    this.recentArticles = this.homeservice.getRecentArticles();
  }

}
