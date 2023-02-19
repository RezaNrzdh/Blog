export class CommentModel {
    public cid!: number;
    public name!: string;
    public email!: string;
    public comment!:string;
    public created!: number;
    public replies!: Array<{
        name: string,
        email: string,
        comment: string,
        created: number
    }>
}