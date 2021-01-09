import { Directive, HostListener } from "@angular/core";
import { NgControl } from "@angular/forms";

@Directive({
  selector: "[appYearSelector]"
})
export class YearSelectorDirective {
  @HostListener("blur", ["$event"]) onBlur() {
    this.ngControl.control.setValue(new Date());
    // this.cdr.detectChanges();
  }

  constructor(private ngControl: NgControl) {}
}
