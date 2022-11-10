import { Directive, HostBinding, Input, OnInit } from "@angular/core";

@Directive({
    selector: 'button[filled-button]'
})
export class FilledButtonDirective implements OnInit {
    @Input() color?: string;
    @HostBinding('style.backgroundColor') backgroundColor?: string;

    ngOnInit ():void {
        this.backgroundColor = this.color;
    }

}