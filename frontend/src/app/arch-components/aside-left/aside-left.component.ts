import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-aside-left',
  templateUrl: './aside-left.component.html',
  styleUrls: ['./aside-left.component.scss']
})
export class AsideLeftComponent implements OnInit {

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
