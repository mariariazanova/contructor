import { Component, OnInit } from '@angular/core';
import {
  CommonModule,
  JsonPipe,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
} from '@angular/common';
import { CtaButtonComponent } from '../cta-button/cta-button.component';
import { ContentfulService } from '../../services/contentful.service';
import { ImageSectionComponent } from '../image-section/image-section.component';
import { TextBlockComponent } from '../text-block/text-block.component';
import { PageComponent } from '../../shared/page/page.component';
import { ComplicatedPageComponent } from '../../shared/complicated-page/complicated-page.component';
import { showOn } from '../../animations/appear-disappear';

@Component({
  // selector: 'app-more-info-page',
  standalone: true,
  imports: [
    // NgClass,
    // NgIf,
    // NgForOf,
    // JsonPipe,
    // NgStyle,
    ImageSectionComponent,
    TextBlockComponent,
    CommonModule,
    // NgForOf,
  ],
  // templateUrl: '../../shared/page/page.component.html',
  // styleUrl: '../../shared/page/page.component.scss',
  templateUrl: '../../shared/complicated-page/complicated-page.component.html',
  styleUrl: '../../shared/complicated-page/complicated-page.component.scss',
  animations: [showOn],
})
export class DetailsPageComponent extends ComplicatedPageComponent {
  // PageComponent {
  // protected pageName = 'Details Page';
  protected pageNames = ['Details Page', 'Variety Page', 'Materials Page'];

  constructor(protected override contentfulService: ContentfulService) {
    super(contentfulService);
  }
}
