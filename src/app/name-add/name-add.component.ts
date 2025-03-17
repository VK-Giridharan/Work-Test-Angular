import { Component } from '@angular/core';
import { NameService } from '../services/name.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-name-add',
  imports: [CommonModule],
  templateUrl: './name-add.component.html',
  styleUrl: './name-add.component.css'
})
export class NameAddComponent {
  names:string[]=[];
  errormessage:string="";
  constructor(private nameservice:NameService){}
 
addname(name:string){
  if (!name.trim()){
    this.errormessage='Name canot be empty';
    return;
  }
   this.nameservice.add(name);
   this.errormessage='';
  }
}
