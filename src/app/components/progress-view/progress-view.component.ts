import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-progress-view',
  templateUrl: './progress-view.component.html',
  styleUrls: ['./progress-view.component.scss'],
  providers: [MessageService],
})
export class ProgressViewComponent {}
