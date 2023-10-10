import { Component } from '@angular/core';
import { ListboxChangeEvent } from 'primeng/listbox';

export interface ThemeOption {
  text: string;
  value: ThemeOptions;
}

export enum ThemeOptions {
  Red = 'red',
  Aqua = 'aqua',
  Blue = 'blue',
  Green = 'green',
  DarkGreen = 'dark-green',
  Teal = 'teal',
  Purple = 'purple',
  Orange = 'orange',
  Violet = 'violet',
  PinkRed = 'pink-red',
  YellowBrown = 'yellow-brown',
  DarkBlue = 'dark-blue',
  Brown = 'brown',
}

export enum ThemeModes {
  Light = 'light-theme',
  Dark = 'dark-theme',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Custom Themes';
  themeOptions: ThemeOption[] = [
    {
      text: 'Red',
      value: ThemeOptions.Red,
    },
    {
      text: 'Blue',
      value: ThemeOptions.Blue,
    },
    {
      text: 'Dark Blue',
      value: ThemeOptions.DarkBlue,
    },
    {
      text: 'Aqua',
      value: ThemeOptions.Aqua,
    },
    {
      text: 'Green',
      value: ThemeOptions.Green,
    },
    {
      text: 'Dark Green',
      value: ThemeOptions.DarkGreen,
    },
    {
      text: 'Teal',
      value: ThemeOptions.Teal,
    },
    {
      text: 'Purple',
      value: ThemeOptions.Purple,
    },
    {
      text: 'Orange',
      value: ThemeOptions.Orange,
    },
    {
      text: 'Violet',
      value: ThemeOptions.Violet,
    },
    {
      text: 'Pink Red',
      value: ThemeOptions.PinkRed,
    },
    {
      text: 'Yellow Brown',
      value: ThemeOptions.YellowBrown,
    },
    {
      text: 'Gold Brown',
      value: ThemeOptions.Brown,
    },
  ];

  activeTheme: ThemeOption = this.themeOptions[0];
  themeMode: ThemeModes = ThemeModes.Dark;
  themeModes = ThemeModes;

  constructor() {
    this.themeChanged();
    this.themeModeToggled();
  }

  themeChanged() {
    console.log(this.activeTheme);

    this.themeOptions.forEach((theme: ThemeOption) => {
      document.querySelector('body')?.classList.remove(theme.value);
    });

    document.querySelector('body')?.classList.add(this.activeTheme.value);
  }

  themeModeToggled() {
    document.querySelector('body')?.classList.remove(this.themeMode);
    if (this.themeMode === ThemeModes.Light) {
      this.themeMode = ThemeModes.Dark;
    } else {
      this.themeMode = ThemeModes.Light;
    }

    document.querySelector('body')?.classList.add(this.themeMode);
  }
}
