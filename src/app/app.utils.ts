import { baseUrl } from './app.globals';

export function getBaseUrl(): string {
    return baseUrl;
  }
  export const DEFAULT_LANG = 'az';
  export const APP_KEY = 'uni';

  export function switchToView(name: string) {
    setTimeout(() => {
      try {
        const nav = document.querySelector(name);
        console.log(nav)
        if (nav) { nav.scrollIntoView() }
      } catch(er) {
        console.log(er);
      }
    }, 10);
  }