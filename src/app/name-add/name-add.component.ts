import { Component } from '@angular/core';
import { NameService } from '../services/name.service';

@Component({
  selector: 'app-name-add',
  imports: [],
  templateUrl: './name-add.component.html',
  styleUrl: './name-add.component.css'
})
export class NameAddComponent {
  names:string[]=[];
  constructor(private nameservice:NameService){}
 
addname(name:string){
   this.nameservice.add(name);
}

}
