import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SortChangeModel } from './directives/order-by-column/sort-change.model';
import { SortStates } from './directives/order-by-column/sort-states.enum';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private translateService: TranslateService) { }

  filterTableWithRowGroups(filterValue: string, data: any) {
    const lang = this.translateService.getDefaultLang();
    return  [...data].map(group => {
      return {
        ...group,
        list: [...group.list].filter((item) => {
          return Object.keys(item).some(key => {
            if (item[key] && item[key][lang]) {
              return !!(item[key][lang].toString().toLowerCase().includes(filterValue));
            } else {
              return !!(item[key] && item[key].toString().toLowerCase().includes(filterValue));
            }
          })
        })
      }
    });
  }
  sortTableWithRowGroups(sortChange: SortChangeModel, data: any) {
    const originalData = [...data];
   const  isAcending = sortChange.orderBySort === SortStates.asc ? 1 : -1;
       originalData.forEach(group => {
        group.list = [...group.list].sort((a, b) => {
          if (+a[sortChange.orderByColumn] > +b[sortChange.orderByColumn]) { return isAcending}
          if (+a[sortChange.orderByColumn] < +b[sortChange.orderByColumn]) { return -isAcending; }
          return 0;
        })
    })
    console.log(originalData)
    if (sortChange.orderBySort === SortStates.asc) {
     return  originalData.sort((a, b) => {
        if (+a.list[0][sortChange.orderByColumn] > +b.list[0][sortChange.orderByColumn]) { return 1; }
        if (+a.list[0][sortChange.orderByColumn] < +b.list[0][sortChange.orderByColumn]) { return -1; }
        return 0;
      });
    } else if (sortChange.orderBySort === SortStates.desc) {
     return  originalData.sort((a, b) => {
        if (+a.list[0][sortChange.orderByColumn] > +b.list[0][sortChange.orderByColumn]) { return -1; }
        if (+a.list[0][sortChange.orderByColumn] < +b.list[0][sortChange.orderByColumn]) { return 1; }
        return 0;
      });
    } else {
     return  data;
    }
  }
}
