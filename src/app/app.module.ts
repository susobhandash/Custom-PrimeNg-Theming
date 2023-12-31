import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';

import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { AccordionModule } from 'primeng/accordion';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';

import { ButtonViewComponent } from './components/button-view/button-view.component';
import { CardViewComponent } from './components/card-view/card-view.component';
import { ProgressViewComponent } from './components/progress-view/progress-view.component';
import { HowToViewComponent } from './components/how-to-view/how-to-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonViewComponent,
    CardViewComponent,
    ProgressViewComponent,
    HowToViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    OverlayPanelModule,
    ToolbarModule,
    ButtonModule,
    ListboxModule,
    TabViewModule,
    PanelModule,
    AccordionModule,
    ProgressBarModule,
    ToastModule,
    MessagesModule,
    RippleModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
