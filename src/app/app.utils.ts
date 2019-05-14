import { baseUrl } from './app.globals';
import { Moment } from 'moment';
import * as moment from 'moment';
export function getBaseUrl(): string {
    return baseUrl;
  }
  export const DEFAULT_LANG = 'az';
  export const APP_KEY = 'uni';

  export function switchToView(name: string) {
    setTimeout(() => {
      try {
        const nav = document.querySelector(name);
        if (nav) { nav.scrollIntoView() }
      } catch(er) {
        console.log(er);
      }
    }, 10);
  }
  export function isMobileSize(): boolean {
    try {
      const width  = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth
      return  width <=576;
    } catch (er) {
      console.log(er);
    }
  }

  export const MY_FORMATS = {
    parse: {
      dateInput: '20130208T08'
    },
    display: {
      dateInput: 'LL',
      monthYearLabel: 'MMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY'
    }
  };

  export function parseMomentToString(formValue: Object): Object {
    try {
     const newFormValue: string = Object.assign(formValue);
     Object.keys(newFormValue).forEach(key => {
       if ( key.toLowerCase().includes('date')  ||  moment.isMoment(key)) {
         newFormValue[key]= momentToString(newFormValue[key]);
       }
     });
     return newFormValue;
    } catch(er) {
        console.log(er);
      return formValue;
    }
   }
   export function  momentToString(date: Moment) {
    if (!date) {return date;}
   return date.format('YYYYMMDD');
 }