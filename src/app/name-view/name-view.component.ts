import { Component } from '@angular/core';
import { NameService } from '../services/name.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-name-view',
  imports: [CommonModule],
  templateUrl: './name-view.component.html',
  styleUrl: './name-view.component.css'
})
export class NameViewComponent {
constructor(private nameservice:NameService){}
names:string[]=[];
ngOnInit(){
  this.names=this.nameservice.get();
}
}
