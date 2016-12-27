import {Component, ViewChild, Renderer} from "@angular/core";
@Component({
  selector: 'widget-three',
  template: `
    <input #input type="text">
  `
})
export class WidgetThree{
  @ViewChild('input') input;

  constructor(private renderer:Renderer){}

  ngAfterViewInit(){
    // this.input.nativeElement.focus(); // not the best way to do this
    this.renderer.invokeElementMethod(
      this.input.nativeElement,
      'focus',
      []
    )
    console.log(this.input);
  }
};
