import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class LatestArticlesService {
    public data: { img: string, title: string, desc: string, author: string, duration: string, created: string } = {
        img: 'https://tajalsahra.tours/wp-content/uploads/2022/04/m55flwylcmf0vd03bbzdumqa4bpb_1540378961_Dubai__.jpeg',
        title: '10 مورد از جذاب و دیدنی ترین مکان های توریستی دبی در سال 2022',
        desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز',
        author: 'رضا نوروززاده',
        duration: 'مدت زمان مطالعه 6 دقیقه',
        created: '10 شهریور 1401'
    }

    getArticle = () => {
        return this.data;
    }
}