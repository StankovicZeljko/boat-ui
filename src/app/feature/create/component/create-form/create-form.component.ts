import { Component, EventEmitter, Output } from '@angular/core';
import { BoatRequest } from '../../../../core/models/boat-request.model';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { RouterLinkWithHref, RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-form',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatFormFieldModule, MatCheckboxModule, MatButtonModule, RouterModule],
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.scss'
})
export class CreateFormComponent {
  @Output() boatCreated = new EventEmitter<BoatRequest>();

  boatRequest: BoatRequest = new BoatRequest('', 0, '', false);

  onSubmit() {
    this.boatCreated.emit(this.boatRequest);
    this.boatRequest = new BoatRequest('', 0, '', false);
  }
}
