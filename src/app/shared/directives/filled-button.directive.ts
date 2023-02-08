import { Directive, HostBinding, Input, OnInit } from "@angular/core";

@Directive({
    selector: 'button[test-button]'
})
export class FilledButtonDirective implements OnInit {
    @Input() color?: string;
    @HostBinding('class') backgroundColor?: string;

    ngOnInit ():void {
        this.backgroundColor = 'FilledButton';
    }

}