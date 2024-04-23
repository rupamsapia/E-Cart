import { Component } from '@angular/core';
import { MainMenuComponent } from "../header/main-menu/main-menu.component";
import { TopMenuComponent } from "../header/top-menu/top-menu.component";

@Component({
    selector: 'top-header',
    standalone: true,
    templateUrl: './top-header.component.html',
    styleUrl: './top-header.component.css',
    imports: [MainMenuComponent, TopMenuComponent]
})
export class TopHeaderComponent {

}
