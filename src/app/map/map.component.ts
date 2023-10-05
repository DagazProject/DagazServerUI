import { Component, OnInit } from '@angular/core';
import { Game } from '../interface/game';
import { MapService } from './map.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [MapService]
})
export class MapComponent implements OnInit {

  games: Array<Game>;
  id: number;
  
  constructor(
    private serv: MapService,
    private activateRoute: ActivatedRoute
  ) { 
    this.games = new Array<Game>();
    this.id = activateRoute.snapshot.params['v'];
  }

  ngOnInit(): void {
    if (!localStorage.getItem('myAuthToken')) {
      localStorage.setItem('myAuthToken', '...');
    }
    this.loadGames();
  }

  private loadGames() {
    this.serv.getGames(this.id).subscribe((data: Game[]) => {
      this.games = data;
    },
    (error: any) => {
      let status = error.status;
      alert("Error: " + status);
    });
  }
}
