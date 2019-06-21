import { Pipe, PipeTransform, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { map, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Pipe({
  name: 'imgSrc',
  pure: false
})
export class ImgSrcPipe implements PipeTransform {
  hostname: string;
  private valueSubject = new Subject();
  imageFetcher$ =  this.valueSubject.asObservable()
  .pipe(
    distinctUntilChanged(),
    switchMap(value => {
      return  this.http.post('mybank/getFileById', {
        fileId: value,
        token: this.authService.token
      }).pipe(
        map((res: any) => {
          if (!(res && res.data && res.data.file && res.data.fileExt)) {return;}
          const base64 =  res.data.file;
          const fileExt = res.data.fileExt;
          let base64Header: string = 'data:image/png;base64';
          // switch(fileExt) {
          //   case 'svg':
          //     base64Header = 'data:image/svg+xml;base64';
          //     break;
          //    case 'png':
          //      base64Header = 'data:image/png;base64';
          // }
          return res && res.data && res.data.file && this.sanitizer.bypassSecurityTrustUrl(`${base64Header}, ${base64}`);
        })
      );
    })
  )
  constructor(cdRef: ChangeDetectorRef, private http: HttpClient, private authService: AuthService, private sanitizer: DomSanitizer) {
  }

  transform(fileId: string): Observable<SafeResourceUrl> {
    if (!fileId) {return;}
    this.valueSubject.next(fileId);
    return this.imageFetcher$;

  }
}
