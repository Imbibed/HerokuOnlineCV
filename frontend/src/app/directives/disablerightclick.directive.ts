import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisablerightclick]'
})
export class DisablerightclickDirective {

  @HostListener('contextmenu', ['$event'])
  OnRightClick(event){
    //console.log(event.target);
    /*const xCoordonate = event.clientX; //  display x coordonate
    const yCoordonate = event.clientY; //  display y coordonate
    const element = event.target;
    let content = element.innerHTML;

    content = '<div stlye="position:absolute;top:50%;left:50%;background-color:red;">" + "</div>';

    element.append(content);*/

    event.preventDefault();
  }

  constructor() { }

}
