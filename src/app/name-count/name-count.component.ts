import { Component } from '@angular/core';
import { NameService } from '../services/name.service';

@Component({
  selector: 'app-name-count',
  imports: [],
  templateUrl: './name-count.component.html',
  styleUrl: './name-count.component.css'
})
export class NameCountComponent {
 constructor(private nameservice:NameService){}
 names:string[]=[];
 ngOnInit(){
   this.names=this.nameservice.get();
 }
}
