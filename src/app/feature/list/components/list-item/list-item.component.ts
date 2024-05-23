import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BoatService } from '../../../../core/service/boat.service';
import { BoatResponse } from '../../../../core/models/boat-response.model';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {
  @Input()
  boat!: BoatResponse;
}
