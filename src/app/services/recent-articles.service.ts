import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class RecentArticlesService {
    private data: object[] = [
        {
            img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/61/40/c2/caption.jpg?w=300&h=300',
            title: 'چطور از سفر به شهر زیبای لندن لذت ببریم؟',
            created: '10 شهریور 1401'
        },
        {
            img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/61/28/44/caption.jpg?w=300&h=300',
            title: 'دیدنی ترین مکان هایی که میتوانید در ماه دسامبر به آنجا بروید',
            created: '10 شهریور 1401'
        },
        {
            img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/4a/a6/a6/caption.jpg?w=300&h=300',
            title: '15 کار سرگرم کننده و منحصر به فرد که فقط در سن آنتونیو میتوانید انجام دهید',
            created: '10 شهریور 1401'
        }
    ];

    getArticles = (): object[] => {
        return this.data;
    }
}