import { Component, OnInit, Input, ViewChild, Output, EventEmitter, OnChanges,
   SimpleChanges, forwardRef, ChangeDetectorRef, ChangeDetectionStrategy, AfterViewInit, OnDestroy, Host, Injector, Optional, SkipSelf } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, NgForm, NgControl, ControlContainer, Validators } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { MatSelect } from '@angular/material';
import { takeUntil, take } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { SelectType } from 'src/app/shared/models/select-type.model';
import { getFormControlError } from 'src/app/admin-panel/admin-panel.utils';

@Component({
  selector: 'select-search',
  templateUrl: './select-search.component.html',
  styleUrls: ['./select-search.component.scss'],
 changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectSearchComponent),
      multi: true
    }
  ]
})
export class SelectSearchComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Output() itemSelected = new EventEmitter<SelectType>();
  @Input() dicTypeId: string;
  @Input() placeholder: string;
  @Input() appearance = 'legacy';
  @Input() noEntriesFoundLabel: string;
  /** list of banks */
   @Input() banks: SelectType[] = [];
   /** Whether field is required */
  @Input() required: boolean;
   /** Name of field */
  @Input() name: string;
  /** control for the selected bank */
  public bankCtrl: FormControl = new FormControl();

  /** control for the MatSelect filter keyword */
  public bankFilterCtrl: FormControl = new FormControl();


  /** list of banks filtered by search keyword */
  public filteredBanks: ReplaySubject<SelectType[]> = new ReplaySubject<SelectType[]>(1);

  @ViewChild('singleSelect', { static: false }) singleSelect: MatSelect;

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();
  disabled: boolean = false;
  constructor(private changeRef: ChangeDetectorRef, @Host() private form: NgForm,  @Optional() @Host() @SkipSelf()
  private controlContainer: ControlContainer, private injector: Injector, private translateService:TranslateService) { }

  ngOnInit() {
    if (this.banks && this.banks.length > 0) {
      this.setBanks(this.banks);
    }
  }
  setValidators() {

    const ngControl: NgControl = this.injector.get(NgControl, null);
  }
  getErrors() {
  //  console.log(this.bankCtrl)
  const ngControl: NgControl = this.injector.get(NgControl, null);
 //   console.log(ngControl)
    return getFormControlError(ngControl,  this.translateService);
  }

  private setBanks(banks) {
    try {
      this.banks = banks;
      // set initial selection
      this.bankCtrl.setValue(this.bankCtrl.value);

      // load the initial bank list
      this.filteredBanks.next(banks.slice());

      // listen for search field value changes
      this.bankFilterCtrl.valueChanges
        .pipe(takeUntil(this._onDestroy))
        .subscribe(() => {
          this.filterBanks();
          this.changeRef.detectChanges();
        });
       this.changeRef.detectChanges();
    } catch(er) {
      console.log(er);
    }
  }

  ngAfterViewInit() {
    this.setInitialValue();
  //  this.bankCtrl.valueChanges.subscribe(res => console.log(res))
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  /**
   * Sets the initial value after the filteredBanks are loaded initially
   */
  protected setInitialValue() {
    // this.filteredBanks
    //   .pipe(take(1), takeUntil(this._onDestroy))
    //   .subscribe(() => {
    //     // setting the compareWith property to a comparison function
    //     // triggers initializing the selection according to the initial value of
    //     // the form control (i.e. _initializeSelection())
    //     // this needs to be done after the filteredBanks are loaded initially
    //     // and after the mat-option elements are available
    //     this.singleSelect.compareWith = (a: SelectType, b: SelectType) => a && b && a.value === b.value;
    //   });
  }

  protected filterBanks() {
    if (!this.banks) {
      return;
    }
    // get the search keyword
    let search = this.bankFilterCtrl.value;
    if (!search) {
      this.filteredBanks.next(this.banks.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredBanks.next(
    this.banks.filter(bank => bank.label.toLowerCase().indexOf(search) > -1)
    );
    this.changeRef.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes['banks'] && changes['banks'].currentValue) {
      this.setBanks(changes['banks'].currentValue);
      this.changeRef.detectChanges();
    }
  }

  onSelect(bank: SelectType) {
    this.onChange(bank.value);
    this.itemSelected.next(bank);
  }
  onReset() {
    this.onChange(undefined);
    this.itemSelected.next({label: '', value: ''});
  }
  /** Form value accessor methods */
  get value(): string | number {
    return this.bankCtrl.value;
  }
  writeValue(value: string): void {
    this.bankCtrl.setValue(value);
    this.changeRef.detectChanges();
  }
  onChange(value: string | number) {
    this.bankCtrl.setValue(value);
  }
  onTouched = () => {};
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
    this.changeRef.detectChanges();
  }
    // Allows Angular to register a function to call when the input has been touched.
  // Save the function as a property to call later here.
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
    this.changeRef.detectChanges();
  }

  // Allows Angular to disable the input.
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
