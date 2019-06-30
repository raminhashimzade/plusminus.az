import { environment } from 'src/environments/environment';

export const baseUrl =
(window.location.origin.includes('test.plusminus.az') || window.location.origin.includes('localhost:4200') )
? 'https://testapi.plusminus.az' : 'https://api.plusminus.az';
