import { Component, OnInit, SimpleChanges, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ButtonToggleComponent),
      multi: true
    }
  ]
})
export class ButtonToggleComponent  {
  private _value: boolean;
  disabled: boolean;
  onToggleValue() {
    this._value =!this._value;
    this.onChange(this._value);
  }
  get value(): boolean {
    return this._value;
  }
  writeValue(value: boolean): void {
    if (value) {
      this._value = value;
    }

  }
  onChange(value: boolean) {
    this._value =  value;
  }
  onTouched = () => {};
  ngOnChanges(changes: SimpleChanges) {

  }
  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
    console.log('register On cChanged')
  }
    // Allows Angular to register a function to call when the input has been touched.
  // Save the function as a property to call later here.
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Allows Angular to disable the input.
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
