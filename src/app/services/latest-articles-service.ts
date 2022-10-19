import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class LatestArticlesService {
    public data: { img: string, title: string, desc: string, authorImg: string, author: string, duration: string, created: string } = {
        img: '/assets/images/latest.jpg',
        title: '10 مورد از جذاب و دیدنی ترین مکان های توریستی دبی در سال 2022',
        desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز',
        authorImg: '/assets/images/author.jpg',
        author: 'رضا نوروززاده',
        duration: 'مدت زمان مطالعه 6 دقیقه',
        created: '10 شهریور 1401'
    }

    getArticle = () => {
        return this.data;
    }
}