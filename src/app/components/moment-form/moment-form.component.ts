import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Moment } from '../../Moment';

@Component({
  selector: 'app-moment-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, RouterLink],
  templateUrl: './moment-form.component.html',
  styleUrl: './moment-form.component.css'
})
export class MomentFormComponent {

@Input() btnText!: string;
@Input() momentData: Moment | null = null;

momentForm!: FormGroup;



constructor() { }

ngOnInit(): void {
  if (this.momentData) {
    console.log(this.momentData);
    this.momentForm = new FormGroup({
      id: new FormControl(this.momentData.id),
      title: new FormControl(this.momentData.title, [Validators.required]),
      description: new FormControl(this.momentData.description, [
        Validators.required,
      ]),
      image: new FormControl(''),
    });
  } else {
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl(''),
    });
  }
}

  get title() {
    return this.momentForm.get('title')!;
  }

  get description() {
    return this.momentForm.get('description')!;
  }


submit() {

    if (this.momentForm.invalid) {
      return;
    }

    console.log(this.momentForm.value);
  }

  onFileSelected(event: any) {
    
    const file: File = event.target.files![0];

    this.momentForm.patchValue({
      image: file
    });
    
  }

}
