import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appFor]",
})
export class ForDirective implements OnInit {
  @Input("appForEm") numbers: number[] = [3];

  constructor() {

  }

  ngOnInit(): void {
    
  }
}
