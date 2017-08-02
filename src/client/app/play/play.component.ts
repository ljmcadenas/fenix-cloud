import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from '../category.model';
import { CategoriesService } from '../categories.service';
import { HangmanComponent } from '../hangman/hangman.component';

@Component({
  selector: 'play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  @ViewChild('select') vcSelect: any;
  @ViewChild(HangmanComponent) hmComponent: HangmanComponent;
  lives: number;
  categories: any[] = [];
  letters: any[] = [];
  lettersError: string[] = [];
  isPlaying = false;
  selectedCategory: Category | number = 0;

  constructor(private categoriesService: CategoriesService, private router: Router) { }

  ngOnInit() {
    // Traigo los nombres de las categorías
    this.categoriesService.getCategories().subscribe( categories => this.categories = categories );
    
    // Traigo las "vidas" que establece <hangman>.
    this.lives = this.hmComponent.lives;
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;

    // Reseteo el juego actual
    this.resetGame();

    // Saco de foco el combo para prevenir que, al presionar las teclas, no cambie el valor.
    this.vcSelect.nativeElement.blur();
    
    // Pido una palabra al servicio.
    this.categoriesService.getWordFromCategory(category)
      .subscribe( word => {
        this.play(word);
      });
  }

  play(word: string): void {
    // Dejo esto con el fin de que se pueda probar comodamente ;)
    console.info(word);

    let letters = word.replace(' ', '').split('');

    letters.forEach( l => {
      this.letters.push({
        letter: l,
        visible: false
      })
    });

    this.isPlaying = true;
  }
  
  // TODO escuchar sólo durante el juego
  // Escucha el evento keypress y evalua las letras de a-z.
  @HostListener('document:keypress', ['$event'])
  onkeypress(event): void {
    const key = event.key.toUpperCase();
    
    if (key.match(/[A-Z]/)) {
      let keyMatched = false;
        
      this.letters.forEach( l => {
        // Hago visible las letras que coincidan.
        if (l.letter === key) {
          l.visible = true;
          keyMatched = true;
        }

      });

      // Si la letra no se encontró, la marco como error.
      if (!keyMatched) { this.onLetterError(key); }

      this.checkGameStatus();
    }
  }

  onLetterError(key: string): void {
    this.lettersError.push(key);
    this.lives--;
  }

  checkGameStatus(): void {
    // Si ya no quedan "vidas", termino el juego con error.
    if (this.lives === 0) { 
      return this.gameover(false) 
    }
    
    let lettersInvisibles = this.letters.filter( l => (!l.visible) );
    
    // Si NO hay letras invisibles => Ganó!
    if (!lettersInvisibles.length) { 
      return this.gameover(true)
    };
  }

  resetGame(): void {
    this.letters = [];
    this.lettersError = [];
  }

  gameover(success: boolean): void {
    this.isPlaying = false;

    this.router.navigate(['/gameover', { win: success} ], {skipLocationChange: true });
  }

}
