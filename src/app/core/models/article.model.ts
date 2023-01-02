export class ArticleModel {
    public _id?: number;
    public title?: string;
    public slug?: string;
    public img?: Array<string>;
    public desc?: string;
    public duration?: number;
    public author?: string;
    public tags?: Array<string>;
    public editorpicked?: boolean;
    public visit?: number;
    public created?: number;
    public __v?: number;
}