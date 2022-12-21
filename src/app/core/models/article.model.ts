export class ArticleModel {
    public _id?: number;
    public title?: string;
    public slug?: string;
    public img?: [];
    public desc?: string;
    public duration?: number;
    public author?: string;
    public tags?: [];
    public editorpicked?: boolean;
    public visit?: number;
    public created?: number;
    public __v?: number;

    // constructor(
    //     _id: number,
    //     title: string,
    //     slug: string,
    //     img: [],
    //     desc: string,
    //     duration: number,
    //     author: string,
    //     tags: [],
    //     editorpicked: boolean,
    //     bisit: number,
    //     created: number,
    //     __v: number) {
    // }
}