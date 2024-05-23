import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { ListItemComponent } from '../list-item/list-item.component';
import { BoatResponse } from '../../../../core/models/boat-response.model';
import { BoatService } from '../../../../core/service/boat.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [MatListModule, ListItemComponent, NgFor],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.scss'
})
export class ListViewComponent implements OnInit {

  boats: BoatResponse[] = [];

  constructor(private boatService: BoatService) { }

  ngOnInit(): void {

    this.boatService.getAllBoats().subscribe((boats) => {
      this.boats = boats;
    });
  }
}
