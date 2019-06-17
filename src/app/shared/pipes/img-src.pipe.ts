import { Pipe, PipeTransform } from '@angular/core';
import { getBaseUrl } from 'src/app/app.utils';
import { HttpClient } from '@angular/common/http';

@Pipe({
  name: 'imgSrc',
  pure: false
})
export class ImgSrcPipe implements PipeTransform {
  hostname: string;
  constructor(private http: HttpClient) {}
  transform(fileId: string): string {
    const hostname = getBaseUrl();
  //  return this.http.post('mybank/getFileById/', {});
    return `${hostname}/DispatcherRest/api/get/file/${fileId}`;
  }
}
