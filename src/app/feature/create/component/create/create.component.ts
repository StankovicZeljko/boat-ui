import { Component } from '@angular/core';
import { BoatService } from '../../../../core/service/boat.service';
import { BoatRequest } from '../../../../core/models/boat-request.model';
import { CreateFormComponent } from '../create-form/create-form.component';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CreateFormComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

  constructor(private boatService: BoatService) { }

  onBoatCreated(boatRequest: BoatRequest) {
    this.boatService.createBoat(boatRequest).subscribe(
      response => {
        console.log('Boat created successfully', response);
        // handle successful creation here
      },
      error => {
        console.error('Error creating boat', error);
        // handle error here
      }
    );
  }
}