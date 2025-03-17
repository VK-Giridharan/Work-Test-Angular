import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NameService } from '../services/name.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-name-add',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './name-add.component.html',
  styleUrl: './name-add.component.css'
})
export class NameAddComponent {
  nameForm: FormGroup; // Form group to manage input field

  constructor(private fb: FormBuilder, private nameService: NameService) {
    this.nameForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]] // Validators added
    });
  }

  addName() {
    if (this.nameForm.invalid) {
      return; // Prevent submission if form is invalid
    }

    this.nameService.add(this.nameForm.value.name);
    this.nameForm.reset(); // Clear input after successful addition
  }

  get name() {
    return this.nameForm.get('name'); // Getter for form control
  }
}
