import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  switchTheme(theme: string) {
    let themeLink = this.document.getElementById(
      'app-theme'
    ) as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = theme + '.css';

      setTimeout(() => {
        const elem = document.querySelector(':root');
        let cs = elem ? getComputedStyle(elem) : null;
        if (cs) {
          const themeColor = cs.getPropertyValue('--mc14');
          const themeMeta = this.document.getElementById(
            'theme-color'
          ) as HTMLMetaElement;

          if (themeMeta) {
            themeMeta.content = themeColor;
          }
        }
      }, 500);
    }
  }
}
