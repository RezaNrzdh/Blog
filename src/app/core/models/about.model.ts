export class AboutModel {
    public goals?: string;
    public properties?: Array<{ img: string; title: string; desc: string; }>;
    public team?: Array<{ img: string, name: string, desc: string }>;
}