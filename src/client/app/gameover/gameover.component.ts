import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `
    <div class="text-center">
      <h2 *ngIf="win">¡Ganaste!</h2>
      <h2 *ngIf="!win">Perdiste :(</h2>
    </div>
    <a class="btn btn-danger btn-block" routerLink="/play" role="button">Volver a jugar</a>
  `,
  styles: []
})
export class GameoverComponent {
  private win;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( data => {
      this.win = (data.win == 'true');
    })
  }

}
