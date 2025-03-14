import { Component } from '@angular/core';

import { NameAddComponent } from "./name-add/name-add.component";
import { NameViewComponent } from "./name-view/name-view.component";
import { NameCountComponent } from "./name-count/name-count.component";

@Component({
  selector: 'app-root',
  imports: [NameAddComponent, NameViewComponent, NameCountComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'name';
}
