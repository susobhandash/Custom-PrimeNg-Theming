import { Component } from '@angular/core';
import { ThemeService } from './services/theme-service';
import { PrimeNGConfig } from 'primeng/api';

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
  Indigo = 'indigo',
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
  title = 'Susobhan - PrimeNg Custom Themes';
  themeOptions: ThemeOption[] = [
    {
      text: 'Blue',
      value: ThemeOptions.Blue,
    },
    {
      text: 'Dark Blue',
      value: ThemeOptions.DarkBlue,
    },
    {
      text: 'Indigo',
      value: ThemeOptions.Indigo,
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
      text: 'Violet',
      value: ThemeOptions.Violet,
    },
    {
      text: 'Purple',
      value: ThemeOptions.Purple,
    },
    {
      text: 'Pink Red',
      value: ThemeOptions.PinkRed,
    },
    {
      text: 'Orange',
      value: ThemeOptions.Orange,
    },
    {
      text: 'Red',
      value: ThemeOptions.Red,
    },
    {
      text: 'Yellow Brown',
      value: ThemeOptions.YellowBrown,
    },
    {
      text: 'Brown',
      value: ThemeOptions.Brown,
    },
  ];

  activeTheme: ThemeOption = this.themeOptions[0];
  themeMode: ThemeModes = ThemeModes.Dark;
  themeModes = ThemeModes;

  constructor(
    private themeService: ThemeService,
    private primengConfig: PrimeNGConfig
  ) {
    this.primengConfig.ripple = true;
    this.themeChanged();
    this.themeModeToggled();
  }

  themeChanged() {
    document.body.className = '';
    const className = this.activeTheme.value + '-' + this.themeMode;
    this.themeService.switchTheme(className);
  }

  themeModeToggled() {
    document.body.className = '';
    if (this.themeMode === ThemeModes.Light) {
      this.themeMode = ThemeModes.Dark;
    } else {
      this.themeMode = ThemeModes.Light;
    }

    const className = this.activeTheme.value + '-' + this.themeMode;
    this.themeService.switchTheme(className);
  }
}
