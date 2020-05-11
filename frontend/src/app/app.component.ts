import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  windowWidth:number;
  windowHeight:number;
  isLandscape: boolean;

  @HostListener('window:resize', ['$event'])
  onResize(event){
    this.windowWidth = event.target.innerWidth;
    this.windowHeight = window.innerHeight;
    this.isLandscape = this.isLandscapeMode(this.windowWidth, this.windowHeight);
  }

  constructor() {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    this.isLandscape = this.isLandscapeMode(this.windowWidth, this.windowHeight);
   }

  ngOnInit(): void {
  }

  isLandscapeMode (windowWidth:number, windowHeight:number) {
    return (windowWidth > windowHeight) ? true : false;
  }
}
