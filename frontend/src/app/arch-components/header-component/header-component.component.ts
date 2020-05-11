import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit, OnDestroy {

  windowWidth:number;
  windowHeight:number;
  isLandscape: boolean;

  @HostListener('window:resize', ['$event'])
  onResize(event){
    this.windowWidth = event.target.innerWidth; //window.innerWidth;
    this.windowHeight = window.innerHeight;
    this.isLandscape = this.isLandscapeMode(this.windowWidth, this.windowHeight);
    //console.log(this.isLandscape);
  }

  constructor() {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    //console.log(this.windowWidth)
    this.isLandscape = this.isLandscapeMode(this.windowWidth, this.windowHeight);
   }

  ngOnInit(): void {
    //console.log("Landswape mode");
  }

  ngOnDestroy():void {
    //console.log("Portrait mode");
  }

  isLandscapeMode (windowWidth:number, windowHeight:number) {
    return (windowWidth > windowHeight) ? true : false;
  }

}
