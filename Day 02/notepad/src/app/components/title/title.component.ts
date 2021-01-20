import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-title', 
    templateUrl: './title.component.html', 
    styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
    @Input() 
    caption: string;

    @Input()
    color: string = 'navy';

    ngOnInit(): void {
        if (!this.caption)
            throw new Error('app-title must receive a content input');
    }

}