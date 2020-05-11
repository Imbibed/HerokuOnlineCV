import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appWindowResizeSensitive]'
})
export class WindowResizeSensitiveDirective {

  windowWidth:number;

  @HostListener('window:resize', ['$event'])
  onResize(event){
    this.windowWidth = event.target.innerWidth; //window.innerWidth;
    //console.log(this.windowWidth);
  }

  constructor() {
    this.windowWidth = window.innerWidth;
    //console.log(this.windowWidth)
   }

}
