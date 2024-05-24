import { Component, OnInit, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { ListItemComponent } from '../list-item/list-item.component';
import { BoatResponse } from '../../../../core/models/boat-response.model';
import { BoatService } from '../../../../core/service/boat.service';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [MatListModule, ListItemComponent, NgFor, RouterModule, MatButtonModule],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.scss'
})
export class ListViewComponent implements OnInit {

  boats = signal<BoatResponse[]>([])

  constructor(private boatService: BoatService) { }

  ngOnInit(): void {

    this.boatService.getAllBoats().subscribe((boats) => {
      this.boats.set(boats)
    });
  }
}
