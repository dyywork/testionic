import { Directive, Attribute } from '@angular/core';

@Directive({
  selector: '[appTabsHide]'
})
export class TabsHideDirective {

  constructor(@Attribute('type') type: string) {
    console.log(type)
  }
   ngOnInit(): void {
     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
     //Add 'implements OnInit' to the class.
     console.log(1)
  
   }
}
