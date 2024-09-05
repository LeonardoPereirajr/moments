import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MomentFormComponent } from "../../moment-form/moment-form.component";

@Component({
  selector: 'app-new-moment',
  standalone: true,
  imports: [RouterLink, MomentFormComponent],
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css'
})
export class NewMomentComponent implements OnInit {
btnText= 'Compartilhar';

  constructor() { }

  ngOnInit(): void {
  }

}
