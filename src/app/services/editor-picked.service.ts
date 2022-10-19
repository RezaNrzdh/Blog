import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class EditorPickedService {
    public data = [
        {
            img: '/assets/images/picked_1_400.jpg',
            title: 'تمام طعم های جهان در یک شهر، نیویورک',
            created: '17 دی 1400'
        },
        {
            img: '/assets/images/picked_2_400.jpg',
            title: 'جنوب اسپانیا رویایی ترین مناظر پاییزی',
            created: '1 مهر 1400'
        },
        {
            img: '/assets/images/picked_3_400.jpg',
            title: '9 جشنواره بی نظیر و شگفت انگیز در آمریکا',
            created: '23 مرداد 1401'
        }
    ]
}