import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MomentFormComponent } from "../../moment-form/moment-form.component";
import { Moment } from '../../../Moment';

@Component({
  selector: 'app-new-moment',
  standalone: true,
  imports: [RouterLink, MomentFormComponent],
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css'
})
export class NewMomentComponent implements OnInit {
  async createHandler(moment: Moment) {
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }
  }
btnText= 'Compartilhar';

  constructor() { }

  ngOnInit(): void {
  }

}
