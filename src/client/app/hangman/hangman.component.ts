import { Component, ViewChild, AfterViewInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.css']
})
export class HangmanComponent implements AfterViewInit, OnChanges {
  @ViewChild('canvas') canvas: any;
  @Input() remainingLives: number;
  readonly lives: number = 6;
  private context: any;

  ngAfterViewInit() {
    this.initCanvas();
  }

  ngOnChanges(changes: SimpleChanges) {
    let lives = changes.remainingLives.currentValue;
      
    switch (lives) {
      case 5: 
        this.head();
        break;
      case 4:
        this.torso();
        break;
      case 3:
        this.leftArm();
        break; 
      case 2:
        this.rightArm();
        break;
      case 1:
        this.leftLeg();
        break;
      case 0:
        this.rightLeg();
        break;
    }
      
  }

  private initCanvas(): void {
    this.canvas= this.canvas.nativeElement;
    this.context = this.canvas.getContext('2d');

    this.context.beginPath();
    this.context.strokeStyle = '#764B29';
    this.context.lineWidth = 2;

    this.draw (0, 150, 150, 150);
    this.draw (10, 0, 10, 600);
    this.draw (0, 5, 70, 5);
    this.draw (60, 5, 60, 15);
  }

  private head(): void {
    this.context.beginPath();
    this.context.arc(60, 25, 10, 0, Math.PI*2, true);
    this.context.stroke();
  }
    
  private draw(fromX: number, fromY: number, toX: number, toY: number): void {
    this.context.moveTo(fromX, fromY);
    this.context.lineTo(toX, toY);
    this.context.stroke(); 
  }
  
  private torso(): void {
    this.draw (60, 36, 60, 70);
  };

  private rightArm(): void {
    this.draw (60, 46, 100, 50);
  };

  private leftArm(): void {
    this.draw (60, 46, 20, 50);
  };

  private rightLeg(): void {
    this.draw (60, 70, 100, 100);
  };

  private leftLeg(): void {
    this.draw (60, 70, 20, 100);
  };
}
