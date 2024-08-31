import { Component } from '@angular/core';
import { LogDirective } from '../log.directive';
import { SafeLinkDirective } from '../safe-link.directive';

@Component({
  selector: 'app-learning-resources',
  imports: [SafeLinkDirective, LogDirective],
  templateUrl: './learning-resources.component.html',
  styleUrl: './learning-resources.component.css',
  standalone: true,
  hostDirectives: [LogDirective],
})
export class LearningResourcesComponent {}
