import { FilePickerAdapter } from 'ngx-awesome-uploader';
import { FilePreviewModel } from 'ngx-awesome-uploader';
import { HttpRequest, HttpEvent, HttpEventType, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

export class UnibookFilePickerAdapter extends FilePickerAdapter {
  constructor(private http: HttpClient) {
    super();
  }
  public uploadFile(fileItem: FilePreviewModel) {
    const form = new FormData();
    form.append('image', fileItem.file);
    form.append('type', 'profile');
    // const api = 'api/post/uploadFile';
    // const req = new HttpRequest('POST', api, form, {reportProgress: true});
    // return this.http.request(req)
    // .pipe(
    //   map( (res: HttpEvent<any>) => {
    //     if (res.type === HttpEventType.Response) {
    //     return res.body.data.toString();
    //   } else if (res.type ===  HttpEventType.UploadProgress) {
    //       // Compute and show the % done:
    //       const UploadProgress = +Math.round((100 * res.loaded) / res.total);
    //       return UploadProgress;
    //   }
    // })
    //   );
    return this.getBase64(fileItem.file as File);
  }
    public removeFile(fileItem): Observable<any> {
    const removeApi = `api/post/file/${fileItem.id}/remove`;
    return this.http.post(removeApi, {});
    }
    getBase64(file: File) {
      return Observable.create(obs => {
        const reader = new FileReader();
        reader.onerror = err => obs.error(err);
        reader.onabort = err => obs.error(err);
        reader.onload = () => obs.next(reader.result);
        reader.onloadend = () => obs.complete();
        return reader.readAsDataURL(file);
      })
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload =() =>  {
  //       console.log(reader.result);
  //       const  base64 = reader.result as ArrayBuffer;
  //     //  this.imgUrl  = this.sanitizer.bypassSecurityTrustUrl(`${base64}`);
  //  //    this.onChange(this.base64);
  //   //   dialogRef.close();
  //       return base64;
  //     };
  //     reader.onerror = function (error) {
  //       console.log('Error: ', error);
  //     };
   }
}