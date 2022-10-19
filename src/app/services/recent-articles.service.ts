import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class RecentArticlesService {
    public data: object[] = [
        {
            img: '/assets/images/recent_1_300.jpg',
            title: 'چطور از سفر به شهر زیبای لندن لذت ببریم؟',
            created: '10 شهریور 1401'
        },
        {
            img: '/assets/images/recent_2_300.jpg',
            title: 'دیدنی ترین مکان هایی که میتوانید در ماه دسامبر به آنجا بروید',
            created: '10 شهریور 1401'
        },
        {
            img: '/assets/images/recent_3_300.jpg',
            title: '15 کار سرگرم کننده و منحصر به فرد که فقط در سن آنتونیو میتوانید انجام دهید',
            created: '10 شهریور 1401'
        }
    ];
}