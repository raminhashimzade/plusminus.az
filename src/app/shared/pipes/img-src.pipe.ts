import { Pipe, PipeTransform } from '@angular/core';
import { getBaseUrl } from 'src/app/app.utils';

@Pipe({
  name: 'imgSrc',
  pure: false
})
export class ImgSrcPipe implements PipeTransform {
  hostname: string;
  transform(fileId: string): string {
    const hostname = getBaseUrl();
    return `${hostname}/DispatcherRest/api/get/file/${fileId}`;
  }
}
