import {
  Directive,
  Input,
  AfterViewInit,
  HostBinding,
  DoCheck,
  Host,
  Optional,
  SkipSelf
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";
import { getFormErrors } from 'src/app/admin-panel/admin-panel.utils';

@Directive({
  selector: "[fieldError]"
})
export class FieldErrorDirective implements AfterViewInit, DoCheck {
  @HostBinding("innerHtml") innerHtml;
  @Input() fieldError: string;
  constructor(
    @Optional() @SkipSelf() @Host() public form: NgForm,
    private translateService: TranslateService
  ) {}
  ngAfterViewInit() {}
  get html() {
    return getFormErrors(this.form, this.fieldError, this.translateService);
  }
  ngDoCheck() {
    this.innerHtml = getFormErrors(this.form, this.fieldError, this.translateService);
  }

}
