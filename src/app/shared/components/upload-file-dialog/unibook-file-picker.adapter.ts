import { AdminPanelService } from './../../../admin-panel/admin-panel.service';
import { AuthService } from './../../../auth/auth.service';
import { Pipe } from '@angular/core';
import { FilePickerAdapter } from 'ngx-awesome-uploader';
import { FilePreviewModel } from 'ngx-awesome-uploader';
import {
  HttpRequest,
  HttpEvent,
  HttpEventType,
  HttpClient
} from '@angular/common/http';
import { map, mergeMap, concatMap, flatMap } from 'rxjs/operators';
import { Observable, of, merge } from 'rxjs';

export class UnibookFilePickerAdapter extends FilePickerAdapter {
  constructor(private http: HttpClient, private authSerice: AuthService, private adminService: AdminPanelService) {
    super();
  }
  public uploadFile(fileItem: FilePreviewModel) {
    return this.getBase64(fileItem.file as File).pipe(
      flatMap(base64 => {
        const data = {
          token: this.authSerice.token,
          adminToken: this.adminService.token,
          module: 'CARD',
          fileName: fileItem.fileName,
          file: base64.split(',')[1]
         }
         console.log(data)
        const api = 'mybank/crud/postFile';
        const req = new HttpRequest('POST', api, data, {
          reportProgress: true
        });
        return this.http.request(req);
      }),
        map((res: HttpEvent<any>) => {
          if (res.type === HttpEventType.Response) {
            return res.body.data.fileId.toString();
          } else if (res.type === HttpEventType.UploadProgress) {
            // Compute and show the % done:
            const UploadProgress = +Math.round(
              (100 * res.loaded) / res.total
            );
            return UploadProgress;
          }
        })
    );




  }
  public removeFile(fileItem): Observable<any> {
    const removeApi = `api/post/file/${fileItem.id}/remove`;
    return this.http.post(removeApi, {});
  }
  getBase64(file: File): Observable<string> {
    return Observable.create(obs => {
      const reader = new FileReader();
       reader.onerror = err => obs.error(err);
      reader.onabort = err => obs.error(err);
      reader.onload = () => obs.next(reader.result);
      reader.onloadend = () => obs.complete();
      return reader.readAsDataURL(file);
    });
  }
}
